import { useState, useEffect } from 'react';
import LoadingPage from './LoadingPage';
import Movies from './Movies';
import {getMovies} from "../service/CRUDHome";

export default function Home() {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMovies()
        .then((movie) => {
          setMovies(movie);
          setLoading(false);
        })
  }, [])

  return loading ? (
      <LoadingPage />
    ) : movies ? (
      <Movies movies={movies}/>
    ) : null;
}
