const express = require("express");
const router = express.Router();

const Review = require("../models/Review.model");
const User = require("../models/User.model");
const Dog = require("../models/Dog.model");


const isLoggedIn = require("../middleware/isLoggedIn");


// GET route to display form to add review to "apartment details"
router.get("/leave-review/:apartmentId", isLoggedIn, (req, res, next) => {
  const { apartmentId } = req.params;
  const userId = req.session.currentUser._id;

  Dog.find({}, 'name')
    .then((dogs) => {
      res.render("leave-review", {
        isLoggedIn: req.session.isLoggedIn,
        dogs,
        apartmentId,
        userId,
      });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Internal Server Error');
    });
});


// POST route to submit a new review on apartment details
router.post("/leave-review", isLoggedIn, (req, res, next) => {
  const { dog, pros, cons, rating } = req.body;
  const apartmentId = req.body.apartmentId;
  const userId = req.session.currentUser._id;

  Review.create({ dog, pros, cons, rating, apartment: apartmentId, user: userId })
    .then((review) => {
      return User.findByIdAndUpdate(userId, { $push: { reviews: review._id } });
    })
    .then(() => {
      res.redirect("/my-kennel"); // Replace with the appropriate redirection URL
    })
    .catch((error) => {
      next(error);
    });
});

// GET route to display the form to edit a specific review
router.get("/edit-review/:reviewId", isLoggedIn, (req, res, next) => {
  const { reviewId } = req.params;
  const userId = req.session.currentUser._id;

  Review.findById(reviewId)
    .populate('dog', 'name')
    .then(reviewToEdit => {
      if (reviewToEdit.user.toString() === userId.toString()) {
        Dog.find({}, 'name')
          .then(dogs => {
            res.render('edit-review', { review: reviewToEdit, dogs, isLoggedIn: req.session.isLoggedIn });
          })
          .catch(error => next(error));
      } else {
        // User is not authorized to edit this review
        res.status(403).send('Unauthorized');
      }
    })
    .catch(error => next(error));
});




// POST route to submit the form when review is edited
router.post("/edit-review/:reviewId", isLoggedIn, (req, res, next) => {

const { reviewId } = req.params;
const { dog, pros, cons, rating } = req.body;

Review.findByIdAndUpdate(reviewId, { dog, pros, cons, rating })
  .then(() => {
    res.redirect("/my-kennel");
  })
  .catch(error => {
    next(error);
  });
});


// POST route for deleting review from "My Kennel"
router.post('/delete-review/:reviewId', (req, res, next) => {

const { reviewId } = req.params;

Review.findByIdAndDelete(reviewId)
  .then(() => res.redirect('/my-kennel'))
  .catch(error => next(error));
});


module.exports = router;