const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Exercise = require("../models/exercise");
const { requireAuthenticatedUser } = require("../middleware/security");

router.get("/", requireAuthenticatedUser, async (req, res, next) => {
  //should return each exercise card (list of exercises)
  try {
    //const user = res.locals.user;
    const listExercises = await Exercise.listExercises({
      user: res.locals.user,
    });
    console.log("finshed list");
    return res.status(200).json({ listExercises });
  } catch (err) {
    next(err);
  }
});

router.post("/create", requireAuthenticatedUser, async (req, res, next) => {
  //should return each exercise card with the newly added one
  //await Exercise.(create)
  try {
    const exercise = await Exercise.create({
      exercise: req.body,
      user: res.locals.user,
    });
    //console.log(user);

    return res.status(201).json({ exercise });
  } catch (err) {
    next(err);
  }
});
module.exports = router;
