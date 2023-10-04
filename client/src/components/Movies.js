import { useState, useEffect, useRef } from "react";
import Movie from "./Movie";
import MovieDetails from "./MovieDetails";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import {
  addToFavorites,
  deleteFromCart,
  deleteFromFavorites,
  getCart,
  getFavorites,
  addToCart
} from "../service/CRUDMovies";

export default function Movies({ movies }) {
  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);
  const [copyMovies, setCopyMovies] = useState(movies);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [renderOne, setRenderOne] = useState(null);
  const [favorites, setFavorites] = useState(null);
  const [cart, setCart] = useState(null);
  const [favoriteToSave, setFavoriteToSave] = useState([]);
  const [itemToSave, setItemToSave] = useState([]);
  const genres = [...new Set(movies.map((movie) => movie.Genre).join(",").replace(/\s/g, "").split(","))];
  const btnRef = useRef();

  useEffect(() => {
    getFavorites()
        .then((fav) => {
          setFavorites(fav);
        })
    getCart()
        .then((cartMovie) => {
          setCart(cartMovie);
        })
  }, [favoriteToSave, itemToSave]);

  const zaaz = "Sorted Z-A | Sort A-Z";
  const azza = "Sorted A-Z | Sort Z-A";
  const sbt = "Sort by Title";

  const sortingFunction = (array, reverse = false) =>
      [...array].sort((a, b) =>
          reverse
              ? b.Title.localeCompare(a.Title)
              : a.Title.localeCompare(b.Title)
      );

  const sorter = (e) => {
    if (e.target.innerText === sbt || e.target.innerText === zaaz) {
      setMoviesToDisplay((previous) => sortingFunction(previous));
      e.target.innerText = azza;
    } else if (e.target.innerText === azza) {
      setMoviesToDisplay((previous) => sortingFunction(previous, true));
      e.target.innerText = zaaz;
    }
  };

  const search = (e) => {
    const filterByPhrase = copyMovies.filter(
        (movie) => movie.Title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setMoviesToDisplay(filterByPhrase);
    setSearchPhrase(e.target.value);
    btnRef.current.innerText = sbt;
  };

  const filterByGenre = (e) => {
    const filteredByGenre = movies.filter(movie => movie.Genre.includes(e.target.value))
    setMoviesToDisplay(filteredByGenre);
    setCopyMovies(filteredByGenre);
    btnRef.current.innerText = sbt;
  }

  const isFavorite = (movie) => {
    if (favorites.length) {
      const has = (element) => element.Title === movie.Title;
      return favorites.some(has) ? <AiFillHeart /> : <AiOutlineHeart />;
    }

    return <AiOutlineHeart />;
  };

  const addOrRem = async (item) => {
    if (isFavorite(item).type.name === <AiOutlineHeart />.type.name) {
      const response = await addToFavorites(item);
      console.log(response);
      setFavoriteToSave((previous) => [...previous, item]);
    } else {
      const response = await deleteFromFavorites(item);
      console.log(response);
      setFavoriteToSave((previous) => previous.filter(fav => fav.Title !== item.Title));
    }
  };

  const isInCart = (movie) => {
    if (cart.length) {
      const has = (element) => element.Title === movie.Title;
      return cart.some(has) ? "Item In Cart" : "Add to Cart"
    }
    return "Add to Cart";
  }

  const addToCart = async (movie) => {
    const request = await fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ ...movie })
    })
    const response = await request.json();
    console.log(response);
    setItemToSave(previous => [...previous, movie]);
  }
  // const addToCartHandler = async (movie) => {
  //     const response = await addToCart(movie);
  //     console.log(response);
  //     setItemToSave((previous) => [...previous, movie]);
  // };

  const handleDeleteFromCart = async (movie) => {
    const response = await deleteFromCart(movie);
    setItemToSave(previous => previous.filter(item => item.Title !== movie.Title));
  }

  const updateQuantity = async (movie, e) => {
    const currentMovie = cart.find(item => item.Title === movie.Title);
    const quantity = e.target.innerText === "+" ? currentMovie.Quantity + 1 : currentMovie.Quantity - 1;

    const movieCopy = { Title: movie.Title, Quantity: quantity, Price: (movie.Price * quantity).toFixed(2) };

    const request = await fetch("http://localhost:5000/cart", {
      method: "PATCH",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(movieCopy)
    })
    const response = await request.json();
    console.log(response);
    setItemToSave(previous => previous.map(item => item.Title === movie.Title ? movieCopy : item));
  }

  return (
      <>
        {favorites && renderOne ? (
            <MovieDetails
                movie={renderOne}
                onClick={() => setRenderOne(null)}
                addOrRemove={() => addOrRem(renderOne)}
                checkFavorite={isFavorite(renderOne)}
                addToCart={() => addToCart(renderOne)}
                deleteCart={() => deleteFromCart (renderOne)}
                quantity={cart}
                checkCart={isInCart(renderOne)}
                plusQuantity={(e) => updateQuantity(renderOne, e)}
                minusQuantity={(e) => updateQuantity(renderOne, e)}
            />
        ) : (
            <div className="movies">
              <div className="sort-btns">
                <select onChange={filterByGenre}>
                  <option disabled selected>Genres</option>
                  {genres && genres.map((genre, i) => <option key={i}>{genre}</option>)}
                </select>
                <button className="sort" onClick={sorter} ref={btnRef}>
                  {sbt}
                </button>
                <input
                    type="text"
                    placeholder="-- Search Movie --"
                    value={searchPhrase}
                    onChange={search}
                />
              </div>
              <div className="all-movies">
                {favorites && moviesToDisplay && cart &&
                    moviesToDisplay.map((movie, i) =>
                        <Movie
                            movie={movie}
                            key={i}
                            onClick={() => setRenderOne(movie)}
                            addOrRemove={() => addOrRem(movie)}
                            checkFavorite={isFavorite(movie)}
                            addToCart={() => addToCart(movie)}
                            deleteCart={() => handleDeleteFromCart(movie)}
                            quantity={cart}
                            checkCart={isInCart(movie)}
                            plusQuantity={(e) => updateQuantity(movie, e)}
                            minusQuantity={(e) => updateQuantity(movie, e)}
                        />
                    )}
              </div>
            </div>
        )}
      </>
  );
}
