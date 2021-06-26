const {UnauthorizedError} = require("../utils/errors")

class User {
    static async login(credentials) {
        //user submits email and password
        //if any are missing throw an error
        //look up in db by email
        //if user is found then compare passwords
        //if any thing goes wrong then return an error
        throw new UnauthorizedError("invalid email/password combination")
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
    }
}

module.exports = User