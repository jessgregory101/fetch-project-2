const express = require("express");
const router = express.Router();

const Apartment = require("../models/Apartment.model");
const Review = require("../models/Review.model");


// GET route to display all the apartments, some info and rating

router.get("/apartments", (req, res, next) => {  
  Apartment.find()
  .then(apartments => {
    const apartmentPromises = apartments.map(apartment => {
      return Review.find({ apartment: apartment._id })
        .then(reviews => {
          let sum = 0;
          for (let review of reviews) {
            sum += review.rating;
          }
          let avgRating;
          if (reviews.length > 0) {
            avgRating = Math.round(sum / reviews.length * 10) / 10;
          } else {
            avgRating = 0;
          }
          apartment.averageRating = avgRating;
          return apartment.save();
        });
    });
    return Promise.all(apartmentPromises);
  })
    .then(apartments => {
      res.render('apartments' , { apartments, isLoggedIn: req.session.isLoggedIn });
    })
    .catch(error => {
      next(error);
    });
});



// GET route to display apartment details, reviews and rating
router.get("/apartment-details/:id", (req, res, next) => {
  const { id } = req.params;

  let apartmentInfo;

  Apartment.findById(id)
  .then(apartment => {
    apartmentInfo = apartment; 
    return Review.find({ apartment: apartment._id }).populate('dog').populate('apartment');
  })
  .then(reviews => {
    let sum = 0;
    for (let i = 0; i < reviews.length; i++) {
      sum += reviews[i].rating;
    }
    let avgRating;
    if (reviews.length > 0) {
      avgRating = Math.round(sum / reviews.length * 10) / 10;
    } else {
      avgRating = 0;
    }
    res.render('apartment-details', { apartment: apartmentInfo, reviews, isLoggedIn: req.session.isLoggedIn });
  })
    .catch(error => {
      next(error);
    });
});



module.exports = router;
