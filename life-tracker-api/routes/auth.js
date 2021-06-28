const express = require("express")
const router = express.Router()
const User = require("../models/user")


router.post("/login", async (req, res, next) => {
    //logs user in with email and password (authentication)
    try {
        const user = await User.login(req.body)
        return res.status(200).json({ user })
    } catch (err) {
        next(err)
    }
})

router.post("/register", async (req, res, next) => {
    //registers user using email, password, and name
    //creates a new user in our database
    try {
        const user = await User.register(req.body)
        return res.status(201).json({ user })
    } catch (err) {
        next(err)
    }
})

// router.get("/", async (req, res, next ) => {
//     //home screen
// })

// router.get("/exercise", authenticatedUser, async(req, res, next) => {
//     //only authenticed users can access their exercise page with an overview of what exercises
//     //they have done as well as an option to add more excercises
//     //
// })

// router.get("/activity", authenticedUser, async(req,res,next) => {
//     //only authernticed users can access their own activity page with an overview of exercise information
//     //users can also add more exercises from this page
// })
module.exports = router