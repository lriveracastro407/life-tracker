const express = require("express");
const router = express.Router();
const User = require("../models/user");
const { createUserJwt } = require("../utils/tokens");
const { requireAuthenticatedUser } = require("../middleware/security");
const { fetchUserByEmail, makePublicUser } = require("../models/user");

router.get("/me", requireAuthenticatedUser, async (req, res, next) => {
  try {
    const { email } = res.locals.user;
    const user = await fetchUserByEmail(email);
    const public = makePublicUser(user);
    return res.status(200).json({ user: public });
  } catch (err) {
    next(err);
  }
});

router.post("/login", async (req, res, next) => {
  //logs user in with email and password (authentication)
  try {
    const user = await User.login(req.body);
    const token = createUserJwt(user);
    return res.status(200).json({ user, token });
  } catch (err) {
    next(err);
  }
});

router.post("/register", async (req, res, next) => {
  //registers user using email, password, and name
  //creates a new user in our database
  try {
    const user = await User.register(req.body);
    const token = createUserJwt(user);
    return res.status(201).json({ user, token });
  } catch (err) {
    next(err);
  }
});


module.exports = router;
