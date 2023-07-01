const express = require("express");
const router = express.Router();

const Dog = require("../models/Dog.model"); // Import the Dog model
const isLoggedIn = require("../middleware/isLoggedIn");

const fileUploader = require('../config/cloudinary.config');

// GET route to display the form to edit a specific dog
router.get("/edit-dog/:dogId", isLoggedIn, (req, res, next) => {
    const { dogId } = req.params;

    Dog.findById(dogId)
    .then(dogToEdit => {
      res.render('edit-dog', { dog: dogToEdit, isLoggedIn: req.session.isLoggedIn });
    })
    .catch(error => next(error));
});


// POST route to submit the form when dog is edited
router.post("/edit-dog/:dogId", isLoggedIn, (req, res, next) => {

  const { dogId } = req.params;
  const { name, breed, age, character, existingImage } = req.body;

  let image;
  if (req.file) {
    image = req.file.path;
  } else {
    image = existingImage;
  }
  
  Dog.findByIdAndUpdate(dogId, { name, breed, age, image, character })
    .then(() => {
      res.redirect("/my-kennel");
    })
    .catch(error => {
      next(error);
    });
});


// POST route for deleting dog from "My Kennel"
router.post('/delete-dog/:dogId', (req, res, next) => {

  const { dogId } = req.params;
 
  Dog.findByIdAndDelete(dogId)
    .then(() => res.redirect('/my-kennel'))
    .catch(error => next(error));
});



module.exports = router;