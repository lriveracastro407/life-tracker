//create exercise method
const db = require("../db");
const { validateFields } = require("../utils/validate");
const { BadRequestError } = require("../utils/errors");

// class Exercise {
//   static async createExercise({ User }) {
//     validateFields = { required: [name, duration, intensity, category] };
//   }
// }
//
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
  //   static async create({ exercise, user }) {
  //     const requiredFields = ["name", "category", "duration", "intensity"];
  //     requiredFields.forEach((field) => {
  //       if (!exercise.hasOwnProperty(field)) {
  //         throw new BadRequestError(
  //           `Required field - ${field} - missing from request body.`
  //         );
  //       }
  //     });
  //     console.log(user);
  //     const results = await db.query(
  //       `
  //       INSERT INTO exercise (name, category, duration, intensity, user_id, created_at)
  //       VALUES ($1, $2, $3, $4, $5, $6)
  //       RETURNING id,
  //                 category,
  //                 duration,
  //                 intensity,
  //                 user_id,
  //                 created_at
  //       `,
  //       [
  //         exercise.name,
  //         exercise.category,
  //         exercise.duration,
  //         exercise.intensity,
  //         user.id,
  //         exercise.created_at,
  //       ]
  //     );
  //     console.log(results);

  //     return results.rows[0];
  //   }
  //   static async fetchExercises({ user }) {
  //     validate user

  //     const result = await db.query(
  //       `
  //         SELECT

  //     `
  //     );
  //     //get each exercise by its ID (in relation to the user)
  //   }
  static async listExercises({ user }) {
    // create a list of each exercise pertaining to an individual user.

    const result = await db.query(
      `
    SELECT *
    FROM exercise;
    `
    );
    console.log(user, "model list user2");
    return result.rows;
    //return query
  }
}
//fetch by id

//fetch by idlist

module.exports = Exercise;
