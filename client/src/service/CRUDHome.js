export const getMovies = async() => {
    return fetch("http://127.0.0.1:5000/api/movies").then(res => res.json());
}