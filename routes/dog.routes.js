const express = require("express");
const router = express.Router();

router.get("/", (req, res,next) => {
    res.render("index");
});

// GET route to display the form to edit a specific dog

// POST route to submit the form when dog is edited

// POST route for deleting dog from "My Kennel"



module.exports = router;