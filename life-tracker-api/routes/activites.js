const express = require("express");
const { requireAuthenticatedUser } = require("../middleware/security");
const router = express.Router();
const User = require("../models/user");
const Exercise = require("../models/exercise");
const { route } = require("./exercise");

router.get("/", requireAuthenticatedUser, async (req, res, next) => {
  try {
    //const user = res.locals.user;
    const duration = await Exercise.totalDuration({
      user: res.locals.user,
    });
    console.log(duration);
    const intensity = await Exercise.avgIntensity({ user: res.locals.user });

    console.log(intensity);
    return res.status(200).json({ duration, intensity });
  } catch (err) {
    next(err);
  }
  //only authernticed users can access their own activity page with an overview of exercise information
  //users can also add more exercises from this page
});
module.exports = router;
