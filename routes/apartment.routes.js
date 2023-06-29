const express = require("express");
const router = express.Router();

const Apartment = require("../models/Apartment.model");

// GET route to display all the apartments

router.get("/apartment-listings", (req, res, next) => {  
    Apartment.find()
      .then(apartments => {
        res.render('apartment-listings', { apartments });
      })
      .catch(error => {
        next(error);
      });
});

// GET route to display all the apartments

router.get("/apartment-details/:id", (req, res, next) => { 

    const { id } = req.params;

    Apartment.findbyId(id)
      .then(apartment => {
        res.render('apartment-details', { apartment });
      })
      .catch(error => {
        next(error);
      });
});


module.exports = router;