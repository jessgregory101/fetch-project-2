const express = require("express");
const router = express.Router();

const User = require("../models/User.model");
const Dog = require("../models/Dog.model");

const isLoggedIn = require("../middleware/isLoggedIn");

// GET route to display all the user's dogs in "my kennel"

router.get("/my-kennel", isLoggedIn, (req, res, next) => {
    const userId = req.session.currentUser._id;
  
    User.findById(userId)
      .populate('dogs')
      .then(user => {
        res.render('my-kennel', { dogs: user.dogs });
      })
      .catch(error => {
        next(error);
      });
  });


// GET route to display form to add dog to "my kennel"



// POST route to submit a new dog



module.exports = router;