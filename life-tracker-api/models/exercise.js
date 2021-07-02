//create exercise method
const db = require("../db");
const { validateFields } = require("../utils/validate");
const { BadRequestError } = require("../utils/errors");

class Exercise {
  static async create({ exercise, user }) {
    const { name, duration, intensity, category } = exercise;
    console.log(exercise);
    try {
      validateFields({
        required: ["name", "duration", "intensity", "category"],
        obj: exercise,
        location: "exercise create",
      });
    } catch (err) {
      throw err;
    }
    const result = await db.query(
      `
          INSERT INTO exercise (name, duration, intensity, category, user_id)
          VALUES ($1, $2, $3, $4, $5)
          RETURNING id, name, duration, category, intensity, user_id;
          `,
      [name, duration, intensity, category, user.id]
    );
    console.log(user, "model user");
    console.log(result);
    return result.rows[0];
  }

  static async listExercises({ user }) {
    // create a list of each exercise pertaining to an individual user.

    const result = await db.query(
      `
    SELECT *
    FROM exercise
    WHERE user_id = $1
    ORDER BY created_at DESC
    `,
      [user.id]
    );
    console.log(user, "model list user2");
    return result.rows;
    //return query
  }
  static async totalDuration({ user }) {
    const result = await db.query(
      `
      SELECT SUM(duration)
      FROM exercise
      WHERE user_id = $1
      `,
      [user.id]
    );
    return result.rows[0];
  }
  static async avgIntensity({ user }) {
    const result = await db.query(
      `
      SELECT AVG(intensity)
      FROM exercise
      WHERE user_id = $1
      `,
      [user.id]
    );
    return result.rows[0];
  }
}
module.exports = Exercise;
