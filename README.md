# myFlix-client

## Description

Using React, build the client-side for an app called myFlix based on its
existing server-side code (REST API and mongoDB). ["movie_app"](https://github.com/manikSom/myFlix).

## 🚀 Live Demo

- [Live Demo Link](https://mokkamovie.netlify.app/login)

## Blueprint and Techstack

- **Parcel** as its build tool
- **React** library and in **ES2015+**

## Features:
Home view
- Returns all movies to the user (each movie item with an image, title, and description)
- A “search” feature in nav bar to filter movies
- Option to select a movie for more details
- Option to log out
- Option to navigate to Profile view
- The movies that are in your favorite list have been highligted with red fav symbol

Specific Movie view
- Returns data (description, genre, director, image) about a single movie to the user
- Allows users to add a movie to their list of favorites
- Display a list of related or similar movies

Login view
- Allows users to log in with a username and password

Signup view
- Allows new users to register (username, password, email, date of birth)

Profile view
- Displays user registration details
- Allows users to update their info (username, password, email, date of birth)
- Displays favorite movies
- Allows users to remove a movie from their list of favorites
- Allows existing users to delete account

## Dependencies

See [package.json](https://raw.githubusercontent.com/manikSom/myFlix-client/main/package.json)
