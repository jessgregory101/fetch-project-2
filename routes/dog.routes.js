const express = require("express");
const router = express.Router();

const Dog = require("../models/Dog.model");
const isLoggedIn = require("../middleware/isLoggedIn");

const fileUploader = require('../config/cloudinary.config');

// GET route to display the form to edit a specific dog
router.get("/edit-dog/:dogId", isLoggedIn, (req, res, next) => {
    const { dogId } = req.params;

    Dog.findById(dogId)
    .then(dogToEdit => {
      console.log(dogToEdit.age);

      const characterObj = {
        Energetic: dogToEdit.character.includes('Energetic') || dogToEdit.character.includes('energetic'),
        Friendly: dogToEdit.character.includes('Friendly') || dogToEdit.character.includes('friendly'),
        Quiet: dogToEdit.character.includes('Quiet') || dogToEdit.character.includes('quiet'),
        Playful: dogToEdit.character.includes('Playful') || dogToEdit.character.includes('playful'),
        Affectionate: dogToEdit.character.includes('Affectionate') || dogToEdit.character.includes('affectionate'),
        Shy: dogToEdit.character.includes('Shy') || dogToEdit.character.includes('shy'),
      };
      
      const ageObj = {
        Puppy: dogToEdit.age === 'Puppy' || dogToEdit.age === 'puppy',
        Teen: dogToEdit.age === 'Teen' || dogToEdit.age === 'teen',
        Mature: dogToEdit.age === 'Mature' || dogToEdit.age === 'mature',
        Retired: dogToEdit.age === 'Retired' || dogToEdit.age === 'retired'
      };

      console.log(ageObj); 

      res.render('edit-dog', { dog: dogToEdit, characterObj, ageObj, isLoggedIn: req.session.isLoggedIn });
    })
    .catch(error => next(error));
});


// POST route to submit the form when dog is edited
router.post("/edit-dog/:dogId", isLoggedIn, fileUploader.single('image'), (req, res, next) => {

  const { dogId } = req.params;
  const { name, breed, age, character, existingImage } = req.body;

  let image;
  if (req.file) {
    image = req.file.path;
  } else {
    image = existingImage;
  }

  let dogCharacter = [];
  if(req.body.Energetic) character.push('Energetic');
  if(req.body.Friendly) character.push('Friendly');
  if(req.body.Quiet) character.push('Quiet');
  if(req.body.Playful) character.push('Playful');
  if(req.body.Affectionate) character.push('Affectionate');
  if(req.body.Shy) character.push('Shy');
  
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