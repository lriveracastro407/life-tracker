const express = require("express")
const router = express.Router()

router.post("/login", async (req, res, next) => {
    //logs user in with email and password (authentication)
    try {
        
    } catch (err) {
        next(err)
    }
})

router.post("/register", async (req, res, next) => {
    //registers user using email, password, and name
    //creates a new user in our database
    try {
        
    } catch (err) {
        next(err)
    }
})

module.exports = router