//create exercise method
const db = require("../db");
const { validateFields } = require("../utils/validate");

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
        RETURNING id, name, duration, category, intensity, user_id as "userId"; 
        `,
      [name, duration, intensity, category, user.id]
    );
    console.log(user, "model user");
    return result.rows[0];
  }

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
    console.log(user, "model list user");
    const query = `
        SELECT exercise.id as "exerciseId",
                exercise.user_id as "userId", 
                exercise.name as "name",
                exercise.category as "category",
                exercise.intensity as "intensity",
                exercise.duration as "duration"
        FROM exercise
        `;
    const result = await db.query(query, [user.email]);
    return result.rows;
  }
}
//fetch by id

//fetch by idlist

module.exports = Exercise;
