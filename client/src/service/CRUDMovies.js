export const getFavorites = async () => {
    try {
        return fetch("http://localhost:5000/favorites").then(res => res.json());
    } catch (error){
        console.log(error.message);
    }
}

export const getCart = async (abort) => {
    try {
        return fetch("http://localhost:5000/cart").then(res => res.json());
    }catch (error){
        console.log(error.message);
    }
}

export const deleteFromFavorites = async (movie, updateFavorites) => {
    const request = await fetch("http://localhost:5000/favorites", {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title: movie.Title }),
    });
    const response = await request.json();
    console.log(response);
    return response;
}

export const addToFavorites = async (movie) => {
    const request = await fetch("http://localhost:5000/favorites", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ ...movie }),
    });
    const response = await request.json();
    console.log(response);
    return response;
}

// export const addToCart = async (movie) => {
//     const request = await fetch("http://localhost:5000/cart", {
//         method: "POST",
//         headers: {
//             "Content-type": "application/json"
//         },
//         body: JSON.stringify({ ...movie })
//     });
//
//     const response = await request.json();
//     console.log(response);
//     return response;
// }

export const deleteFromCart = async (movie) => {
    const movieToDelete = JSON.parse(JSON.stringify(movie));
    const request = await fetch("http://localhost:5000/cart", {
        method: "DELETE",
        headers: {
            "Content-type":"application/json"
        },
        body: JSON.stringify({title: movieToDelete.Title})
    });
    const response = await request.json();
    console.log(response);
    return response;
}

