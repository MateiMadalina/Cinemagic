import { useState, useEffect } from 'react';
import LoadingComponent from '../components/LoadingComponent';
import Movies from '../components/Movies';
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
      <LoadingComponent />
    ) : movies ? (
      <Movies movies={movies}/>
    ) : null;
}
