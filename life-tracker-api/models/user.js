const { UnauthorizedError, BadRequestError } = require("../utils/errors");
const db = require("../db");
const bcrypt = require("bcrypt");
const { BCRYPT_WORK_FACTOR } = require("../config");

class User {
  static makePublicUser(user) {
    return {
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
    };
  }
  static async login(credentials) {
    //user submits email and password
    //if any are missing throw an error
    //look up in db by email
    //if user is found then compare passwords
    //if any thing goes wrong then return an error
    const requiredFields = ["email", "password"];
    requiredFields.forEach((property) => {
      if (!credentials.hasOwnProperty(property)) {
        throw new BadRequestError(`Missing ${property} in request body.`);
      }
    });

    const user = await User.fetchUserByEmail(credentials.email);
    if (user) {
      const isValid = await bcrypt.compare(credentials.password, user.password);
      if (isValid) {
        return User.makePublicUser(user);
      }
    }

    throw new UnauthorizedError("invalid email/password combination");
  }
  static async register(credentials) {
    // register user by email, name, and password into database
    //(if anything is missing throw an error)
    //
    //check if email exists in db (if so throw an error )
    //
    //take user password and hash it
    //take email and lowercase it
    //
    //create user in db
    //return user (without password)
    const requiredFields = ["email", "password", "name", "username"];
    requiredFields.forEach((property) => {
      if (!credentials.hasOwnProperty(property)) {
        throw new BadRequestError(`Missing ${property} in request body.`);
      }
    });

    if (credentials.email.indexOf("@") <= 0) {
      throw new BadRequestError("Invalid email.");
    }

    const existingUser = await User.fetchUserByEmail(credentials.email);
    if (existingUser) {
      throw new BadRequestError(
        `A user already exists with email: ${credentials.email}`
      );
    }

    const hashedPassword = await bcrypt.hash(
      credentials.password,
      BCRYPT_WORK_FACTOR
    );
    const normalizedEmail = credentials.email.toLowerCase();

    const userResult = await db.query(
      `
            INSERT INTO users (email, password, name, username)
            VALUES ($1, $2, $3, $4)
            RETURNING id, email, name,  username;
            `,
      [normalizedEmail, hashedPassword, credentials.name, credentials.username]
    );
    const user = userResult.rows[0];

    return User.makePublicUser(user);
  }

  static async fetchUserByEmail(email) {
    if (!email) {
      throw new BadRequestError("No email provided");
    }

    const query = `SELECT * FROM users WHERE email = $1`;

    const result = await db.query(query, [email.toLowerCase()]);

    const user = result.rows[0];

    return user;
  }
}

module.exports = User;
