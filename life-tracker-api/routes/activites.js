const express = require("express")
const router = express.Router()
const User = require("../models/user")

router.get("/activity", authenticedUser, async(req,res,next) => {
    //only authernticed users can access their own activity page with an overview of exercise information
    //users can also add more exercises from this page
})