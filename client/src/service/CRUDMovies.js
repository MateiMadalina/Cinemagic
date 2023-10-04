export const getFavorites = async () => {
    return fetch("http://localhost:5000/favorites").then(res => res.json());
}

export const getCart = async (abort) => {
    return fetch("http://localhost:5000/cart").then(res => res.json());
}