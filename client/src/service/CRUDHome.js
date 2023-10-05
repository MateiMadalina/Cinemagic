export const getMovies = async() => {
    try {
        return fetch("http://127.0.0.1:5000/api/movies").then(res => res.json());
    }catch (error) {
        console.log(error.message);
    }
}