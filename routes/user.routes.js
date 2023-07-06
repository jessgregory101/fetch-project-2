const express = require("express");
const router = express.Router();

const User = require("../models/User.model");
const Dog = require("../models/Dog.model");
const Review = require("../models/Review.model");

const fileUploader = require('../config/cloudinary.config');

const isLoggedIn = require("../middleware/isLoggedIn");


// GET route to display all the user's dogs and reviews in "my kennel"

router.get("/my-kennel", isLoggedIn, (req, res, next) => {
  const userId = req.session.currentUser._id;

  User.findById(userId)
    .populate('dogs')
    .then(user => {

      const dogIds = user.dogs.map(dog => dog._id);
      return Review.find({ dog: { $in: dogIds } })
        .populate('dog')
        .then(reviews => {
          res.render('my-kennel', { dogs: user.dogs, reviews, isLoggedIn: req.session.isLoggedIn });
        })
    })
    .catch(error => {
      next(error);
    });
});



// GET route to display form to add dog to "my kennel"

router.get("/add-dog", isLoggedIn, (req, res, next) => {
  res.render("add-dog", { isLoggedIn: req.session.isLoggedIn });
});


// POST route to submit a new dog

router.post("/add-dog", isLoggedIn, fileUploader.single('image'), (req, res, next) => {
  const { name, breed, age, character } = req.body;
  const owner = req.session.currentUser._id;
  const image = req.file.path;

  Dog.create({ name, breed, age, image, character, owner })
    .then(dog => {
      return User.findByIdAndUpdate(owner, { $push: { dogs: dog._id } });
    })
    .then(() => {
      res.redirect("/my-kennel");
    })
    .catch(error => {
      next(error);
    });
});


module.exports = router;