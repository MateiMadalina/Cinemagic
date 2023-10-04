export const getFavorites = async () => {
    return fetch("http://localhost:5000/favorites").then(res => res.json());
}

export const getCart = async (abort) => {
    return fetch("http://localhost:5000/cart").then(res => res.json());
}

export const deleteFromFavorites = async (movie, updateFavorites) => {
    const request = await fetch("http://localhost:5000/favorites", {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title: movie.Title }),
    });
    const response = await request.json();
    console.log(response);
    updateFavorites((previous) => [...previous.filter(item => item.Title !== movie.Title)]);
}



