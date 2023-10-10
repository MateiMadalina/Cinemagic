# Cinemagic

## Project Description

Cinemagic is a web application that enables movie enthusiasts to buy their favorite films. Users can easily search for movies by name, sort them by genre or alphabetically, even add them to their favorites. By clicking on the movie's image on the home page, users can access the tutorial and the movie details. The 'Favorites' page allows users to sort movies by duration and rating, while the 'Cart' page displays selected movies and provides a form for completing the order.

![HomePage](https://github.com/MateiMadalina/Cinemagic/assets/116349352/3357f05e-d70a-4e55-b60d-1a5baf2efa89)


### Technologies Used:

We utilized the following technologies to create Cinemagic:

- **Node.js**: A runtime environment for server-side JavaScript execution.
- **Express.js**: Backend development, creating APIs and database interactions.
- **MongoDbCompass**: To store some information in the database.
- **React**: A popular web application library known for its effectiveness in creating interactive and dynamic UI components.
- **SCSS**: To customize the design of our application.

### Challenges

During development, we faced the following challenges:

- The fetch on the Movie API didn’t work as we expected, so we selected the movies we wanted and created our own database with the help of the API information.
- Ensuring code organization that is both understandable and easily navigable remains an ongoing challenge, with opportunities for further improvement.

## Setup

### Server side
#### Install dependencies
```bash
cd server
npm install
```

#### .env file
Copy the .env.example as .env and fill up the environment variable for your personal mongodb connecttion url.

#### Running the code

```bash
cd server
nodemon server.js
```

It will start the server with nodemon. So it will watch the changes and restart the server if some ot the files changed.



### Client side

#### Install dependencies

```bash
cd client
npm install
```

#### Runnig the code

```bash
cd client
npm start
```

And the create-react-app react-scripts package will start your frontend on the 3000 port and you can visit the http://localhost:3000 on your preferred browser.
