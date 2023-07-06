// seeds.js

const mongoose = require('mongoose');
const Apartment = require('../models/Apartment.model');

const DB_NAME = "fetch-project-2";

mongoose
  .connect(`mongodb://localhost/${DB_NAME}`, {
  })
  .then(() => {
    console.log('Connected to the database');

    const apartments = [
      {
        name: "Apartment in London",
        location: "London",
        price: "$",
        heroImage: "/images/london-a-1.jpg",
        secondImage: "/images/london-a-2.jpg",
        thirdImage: "/images/london-a-3.jpg",
        description: "A cozy and dog-friendly apartment located in the heart of London. Close to parks and dog-friendly attractions.",
        dogFeatures: ["Free Treats", "Toys", "Dog Bowl"],
        averageRating: 0
      },
      {
        name: "Apartment in Barcelona",
        location: "Barcelona",
        price: "$$$",
        heroImage: "/images/barcelona-c-1.jpg",
        secondImage: "/images/barcelona-c-2.jpg",
        thirdImage: "/images/barcelona-c-3.jpg",
        description: "A vibrant, spacious apartment in beautiful Barcelona. Near dog-friendly beaches and parks.",
        dogFeatures: ["Toys", "Dog Bowl"],
        averageRating: 0
      },
      {
        name: "Apartment in London",
        location: "London",
        price: "$$$",
        heroImage: "/images/london-c-1.jpg",
        secondImage: "/images/london-c-2.jpg",
        thirdImage: "/images/london-c-3.jpg",
        description: "Experience the elegance of London in this modern apartment, perfect for you and your canine companion. Enjoy nearby parks and dog-friendly cafes.",
        dogFeatures: ["Free Treats", "Dog Bed", "Toys", "Garden"],
        averageRating: 0
      },
      {
        name: "Apartment in Amsterdam",
        location: "Amsterdam",
        price: "$$$",
        heroImage: "/images/amsterdam-c-1.jpg",
        secondImage: "/images/amsterdam-c-2.jpg",
        thirdImage: "/images/amsterdam-c-3.jpg",
        description: "A charming apartment located in scenic Amsterdam. Surrounded by dog-friendly parks and attractions.",
        dogFeatures: ["Toys", "Dog Bed", "Dog Bowl"],
        averageRating: 0,
      },
      {
        name: "Apartment in Barcelona",
        location: "Barcelona",
        price: "$$",
        heroImage: "/images/barcelona-b-1.jpg",
        secondImage: "/images/barcelona-b-2.jpg",
        thirdImage: "/images/barcelona-b-3.jpg",
        description: "Immerse yourself in the culture of Barcelona in this chic apartment, complete with dog-friendly amenities. Explore the nearby dog-friendly beaches and promenades.",
        dogFeatures: ["Free Treats", "Dog Bed", "Dog Bowl", "Toys"],
        averageRating: 0
      },
      {
        name: "Apartment in Amsterdam",
        location: "Amsterdam",
        price: "$",
        heroImage: "/images/amsterdam-a-1.jpg",
        secondImage: "/images/amsterdam-a-2.jpg",
        thirdImage: "/images/amsterdam-a-3.jpg",
        description: "Explore the charm of Amsterdam from this comfortable apartment, ideally suited for dog-owners. Numerous dog-friendly parks and attractions in the vicinity.",
        dogFeatures: ["Toys", "Dog Bowl", "Free Treats"],
        averageRating: 0
      },
      {
        name: "Apartment in London",
        location: "London",
        price: "$$",
        heroImage: "/images/london-b-1.jpg",
        secondImage: "/images/london-b-2.jpg",
        thirdImage: "/images/london-b-3.jpg",
        description: "Get the most out of London with this plush apartment, equipped for dog-owners. Close proximity to dog-friendly parks and eateries.",
        dogFeatures: ["Garden", "Dog Bowl", "Toys", "Garden"],
        averageRating: 0
      },
      {
        name: "Apartment in Barcelona",
        location: "Barcelona",
        price: "$",
        heroImage: "/images/barcelona-a-1.jpg",
        secondImage: "/images/barcelona-a-2.jpg",
        thirdImage: "/images/barcelona-a-3.jpg",
        description: "Experience the vibrancy of Barcelona with this stylish apartment, designed with dogs in mind. Take advantage of the nearby dog-friendly beaches and parks.",
        dogFeatures: ["Toys", "Free Treats", "Dog Bed"],
        averageRating: 0
      },
      {
        name: "Apartment in Amsterdam",
        location: "Amsterdam",
        price: "$$",
        heroImage: "/images/amsterdam-b-1.jpg",
        secondImage: "/images/amsterdam-b-2.jpg",
        thirdImage: "/images/amsterdam-b-3.jpg",
        description: "Enjoy the idyllic beauty of Amsterdam from this delightful apartment, suitable for dogs. Explore the nearby dog-friendly attractions and green spaces.",
        dogFeatures: ["Free Treats", "Dog Bed"],
        averageRating: 0
      }
    ];
    

    Apartment.create(apartments)
      .then((apartmentsFromDB) => {
        console.log(`Created ${apartmentsFromDB.length} apartments in the database`);
        mongoose.connection.close();
      })
      .catch((error) => console.log(`An error occurred while creating apartments in the database: ${error}`));
  })
  .catch((error) => console.log(`An error occurred while connecting to the database: ${error}`));
