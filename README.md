# Fetch

## Description
"Fetch" is a dog-friendly apartment finder application designed with a dog-centric approach. Fetch takes playful approach to accomodation platforms where the user can leave reviews from the perspective of their dog and comment on the dog-friendly features a given apartment has.

A central part of the platform is the review featre. Each apartment listing comes with detailed features that matter most to dogs when travelling. Reviews focus on elements that contribute to a dog's comfort and enjoyment. These features and reviews play a key role in helping users decide whether to choose an apartment.

## User Stories
- 404: As a user, I want to see a nice 404 page when I go to a page that doesn't exist, informing me that the error is on my end.
- Homepage: As a user, I want to be able to access the homepage, understand what the app is about, and navigate to the login and signup pages.
- Sign Up: As a user, I want to sign up on the webpage, enabling me to add dogs to my profile and leave apartment reviews.
- Log In: As a user, I want to be able to log in to the webpage to access my account.
- Log Out: As a user, I want to be able to log out from the webpage to ensure the security of my account.
- Apartments: As a user, I want to see all of the different apartments available for booking.
- Apartment Details: As a user, I want to see the details of all the different apartments, including features and reviews.
- Add Dog: As a user, I want to add dog(s) to my profile, enhancing the personalized experience of the platform.
- Edit Dog: As a user, I want to edit the details of my dog(s) to keep my profile up-to-date.
- Delete Dog: As a user, I want to remove a dog from my profile when necessary.
- Leave Review: As a user, I want to leave a review about an apartment, sharing my dog's experience with other users.

## Models

### User Model
This model represents the users of the application. It contains the fields email and password, and a reference to the Dog Model for the dogs owned by the user and Review Model for the reviews written by the user.

### Apartment Model
This model contains information about the apartments listed on the platform. It includes details like name, location, price, dog friendly features, and a reference to the Review Model for apartment reviews.

### Dog Model
This model contains information about the dogs owned by users. It includes details like name, breed, age, character, and a reference to the User Model for the owner of the dog.

### Review Model
This model represents reviews left by users. It includes fields like pros, cons, rating, and references to the User Model (for the author of the review), the Apartment Model (for the apartment being reviewed) and the Dog Model (for the dog that leaves the review).

## Backlog

- User to be able to favourite apartments and save them in "My Kennel"
- Nodemailer
- Drag and drop for uploading images for adding a dog and editing a dog
- Sign in with Gmail
- Maps for apartment details view
- More development on the styling of the review card

## Links

- [Deployed Project](https://fetch.cyclic.app/)

## Creators

This project was created as part of Ironhack's Module 2 Project by [Jessica Gregory](https://github.com/jessgregory101) and [Oliver Juggins](https://github.com/ollie-j-j).