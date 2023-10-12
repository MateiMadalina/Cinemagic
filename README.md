# Cinemagic

## Project Description

Cinemagic is a web application that enables movie enthusiasts to buy their favorite films. Users can easily search for movies by name, sort them by genre or alphabetically, even add them to their favorites. By clicking on the movie's image on the home page, users can access the tutorial and the movie details. The 'Favorites' page allows users to sort movies by duration and rating, while the 'Cart' page displays selected movies and provides a form for completing the order.

![HomePage](https://github.com/MateiMadalina/Cinemagic/assets/116349352/75150981-d79e-46e6-963e-8005ad0f5de7)


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

As soon as you launch the application, you'll see a list of all the movies available in our database. With such an extensive selection, finding the perfect movie can be a bit challenging. To make your decision easier, we've designed a dedicated page where you can explore all the details of each film, including its trailer. Accessing this page is straightforward - simply click on the movie poster right from the home page.

![movieDetails](https://github.com/MateiMadalina/Cinemagic/assets/116349352/73ffdda5-468d-4915-9b15-5972bc9c893f)


Also to enhance navigation on the main page, we've incorporated the following search elements:

1. **Genre Filter**: Utilize a select-option to filter movies by specific genres.

![genreFilter](https://github.com/MateiMadalina/Cinemagic/assets/116349352/537b3447-470e-4a67-9db2-df5d054b5246)

2. **Alphabetical Sorting**: Easily sort movies alphabetically, or in reverse order, with a convenient button.

![sortedZ-A](https://github.com/MateiMadalina/Cinemagic/assets/116349352/960f92fe-ec57-46c6-932c-273130f75ee8)

3. **Name Search**: Use an input field to search for movies by their complete name or partial name matches.

![SearchMovie](https://github.com/MateiMadalina/Cinemagic/assets/116349352/7c3d7f86-e7b9-43d9-a463-3861292bda93)

To add movies to your favorites list, simply click the heart icon located beneath the movie image on the home page. Now, the 'Favorite Movies' page can be accessed through the navigation bar, where you can utilize the filtering buttons located beneath the navigation bar to refine your selections.

![FavoriteMoviePage](https://github.com/MateiMadalina/Cinemagic/assets/116349352/1617d540-b6eb-4663-908e-0af7f8dd9eed)

Once you've decided which movies you want to purchase and include in your shopping cart, the process is straightforward. Click the 'Add to Cart' button and specify the desired quantity.

![addToCart](https://github.com/MateiMadalina/Cinemagic/assets/116349352/42ebff73-32ee-41f4-b103-f5d3e53a21c0)

To complete your order, select the shopping cart icon in the navigation bar and proceed to fill out the form located beneath the order summary.

![cartPage](https://github.com/MateiMadalina/Cinemagic/assets/116349352/10b30c2a-e2bc-4510-96d8-89abedbdd50d)
