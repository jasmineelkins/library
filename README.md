# BookBook

> Browse books by genre and find something new to read. Save books to your library collections: Want to Read, Currently Read, and Have Read.

<!-- > Live demo [_here_](https://www.example.com). If you have the project hosted somewhere, include the link here. -->

## Table of Contents

- [General Info](#general-information)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Screenshots](#screenshots)
- [Project Status](#project-status)
- [Room for Improvement](#room-for-improvement)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)
- [Setup and Usage](#setup-and-usage)

## General Information

BookBook was designed & built by Jasmine Elkins and Kristen Cadacio for our Phase 4 project at the Flatiron School Software Engineering Program.

###### Project Requirements

- Use a Rails API backend with a React frontend.
- Have at least three models on the backend, that include:
  - at least one one-to-many relationship
  - at least one many-to-many relationship
  - full CRUD actions for at least one resource
- Have at least three different client-side routes using React Router. Be sure to include a nav bar or other UI element that allows users to navigate between routes.
- Implement authentication/authorization, including password protection. A user should be able to log in to the site with a secure password and stay logged in via user ID in the session hash.

## Technologies Used

- React 18.1.0
- Ruby 2.7.4
- Rails 7.0.2

#### Ruby Gems

- bcrypt 3.1.17
- sqlite 1.4

## Features

- Search for books by title using Google Books API
- Save to your personal library, organized into three different collections
- Leave reviews and ratings for books in your collection
- Browse random books by genre to find something new to read

## Screenshots

##### Homepage

![Homepage](https://res.cloudinary.com/dbl7owtdh/image/upload/v1656363692/Portfolio%20Images/bookbook-welcome_dv3yxg.png)

##### Library

![Library](https://res.cloudinary.com/dbl7owtdh/image/upload/v1656363691/Portfolio%20Images/bookbook-userhome_j3pgtm.png)

<!-- ## Demo

<a href="http://www.youtube.com/watch?feature=player_embedded&v=YOUTUBE_VIDEO_ID_HERE
" target="_blank"><img src="http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg"
alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a> -->

## Setup

What are the project requirements/dependencies? Where are they listed? A requirements.txt or a Pipfile.lock file perhaps? Where is it located?

Proceed to describe how to install / setup one's local environment / get started with the project.

## Usage

How does one go about using it?
Provide various use cases and code examples here.

`write-your-code-here`

## Project Status

Project is: _in progress_

## Room for Improvement

Room for improvement:

- User can currently import goodreads csv file, but can't do anything with the data. Figure out how to iterate through and find each book in Google Books, and add to library
- User should be able to update rating, review, and collection from modal

To do:

- Deploy to Heroku!
- Import NYT top bestseller's list & generate collection on home page
- Allow user to add custom-named shelves
- Generate user's statistics (books read, total pages, etc)

## Acknowledgements

- This project was inspired by our love of reading and a desire to improve upon the design and usability of GoodReads.

We used the [React Toastify Library](https://www.npmjs.com/package/react-toastify) and followed this [Importing CSV to React tutorial](https://dev.to/pankod/how-to-import-csv-file-with-react-4pj2)

## Contact

Created by [Jasmine Elkins](https://www.linkedin.com/in/jasmine-elkins/) and [Kristen Cadacio](https://www.linkedin.com/in/kristen-cadacio-408b3321/) - feel free to contact us!

## Setup and Usage

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

LEARNINGS:

CREDITS:
React Toastify: https://www.npmjs.com/package/react-toastify

Importing CSV to React tutorial: https://dev.to/pankod/how-to-import-csv-file-with-react-4pj2
