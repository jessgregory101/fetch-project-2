const express = require("express");
const router = express.Router();

const Review = require("../models/Review.model");
const User = require("../models/User.model");

const isLoggedIn = require("../middleware/isLoggedIn");




// GET route to display form to add review to "apartment details"
router.get("/leave-review/:apartmentId", isLoggedIn, (req, res, next) => {
  res.render("leave-review");
});


// POST route to submit a new review on apartment details
router.post("/leave-review", isLoggedIn, (req, res, next) => {
    const { dog, pros, cons, rating } = req.body;
    const owner = req.session.currentUser._id;
  
    Review.create({ dog, pros, cons, rating })
      .then(review => {
        return User.findByIdAndUpdate(owner, { $push: { reviews: review._id } });
      })
      .then(() => {
        res.redirect("/my-kennel"); //this will need changing to the aparrtment listing with updated reviews
      })
      .catch(error => {
        next(error);
      });
});


module.exports = router;