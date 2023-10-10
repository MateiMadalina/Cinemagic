# Cinemagic

## Project Description

Cinemagic is a web application that enables movie enthusiasts to buy their favorite films. Users can easily search for movies by name, sort them by genre or alphabetically, even add them to their favorites. By clicking on the movie's image on the home page, users can access the tutorial and the movie details. The 'Favorites' page allows users to sort movies by duration and rating, while the 'Cart' page displays selected movies and provides a form for completing the order.

![HomePage](https://github.com/MateiMadalina/Cinemagic/assets/116349352/ddde489e-9777-4b91-83c5-48adcf1234a8)

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

## How To Use

As soon as you launch the application, you'll see a list of all the movies available in our database. With such an extensive selection, finding the perfect movie can be a bit challenging. To make your decision easier, we've designed a dedicated page where you can explore all the details of each film, including its trailer. Accessing this page is a breeze - simply click on the movie poster right from the home page.

![movieDetails](https://github.com/MateiMadalina/Cinemagic/assets/116349352/c3de0d87-fe9a-45a3-b92d-70fd6d09c4d4)

To add movies to your favorites list, simply click the heart icon located beneath the movie image on the home page. Now, the 'Favorite Movies' page can be accessed through the navigation bar, where you can utilize the filtering buttons located beneath the navigation bar to refine your selections.

![FavoriteMoviePage](https://github.com/MateiMadalina/Cinemagic/assets/116349352/082a1f65-9150-4dc2-9a0f-bac3467dc42d)

Now that you have decided which movies you want to purchase to include them in your shopping cart, all you have to do is click the 'Add to Cart' button and choose the desired quantity.

![addToCart](https://github.com/MateiMadalina/Cinemagic/assets/116349352/f1d99bfa-bffd-4a77-80c0-05c19bc64587)

To finalize your order, the next step is to select the shopping cart icon in the navigation bar and proceed to fill out the form located beneath the order summary.

![cartPage](https://github.com/MateiMadalina/Cinemagic/assets/116349352/1a893c5c-c544-4366-bfba-6c941be88e81)
