const express = require("express");
const router = express.Router();

const Apartment = require("../models/Apartment.model");
const Review = require("../models/Review.model");


// GET route to display all the apartments

router.get("/apartments", (req, res, next) => {  
  Apartment.find()
    .then(apartments => {
      res.render('apartments' , { apartments, isLoggedIn: req.session.isLoggedIn });
    })
    .catch(error => {
      next(error);
    });
});

// GET route to display apartment details and reviews
router.get("/apartment-details/:id", (req, res, next) => {
  const { id } = req.params;

  const fetchApartment = Apartment.findById(id).populate('reviews');
  const fetchReviews = Review.find({ apartment: id });

  Promise.all([fetchApartment, fetchReviews])
    .then(([apartment, reviews]) => {
      res.render('apartment-details', { apartment, reviews, isLoggedIn: req.session.isLoggedIn });
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
