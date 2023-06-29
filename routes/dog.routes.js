const express = require("express");
const router = express.Router();

const Dog = require("../models/Dog.model"); // Import the Dog model
const isLoggedIn = require("../middleware/isLoggedIn");



// GET route to display the form to edit a specific dog
router.get("/edit-dog/:dogId", isLoggedIn, (req, res, next) => {
    const { dogId } = req.params;

    Dog.findById(dogId)
    .then(dogToEdit => {
      res.render('edit-dog', { dog: dogToEdit });
    })
    .catch(error => next(error));
});


// POST route to submit the form when dog is edited
router.post("/edit-dog/:dogId", isLoggedIn, (req, res, next) => {

  const { dogId } = req.params;
  const { name, breed, age, image, character } = req.body;
  
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