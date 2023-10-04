export const getCart = async () => {
    return fetch("http://localhost:5000/cart").then(res => res.json());
}

export const postOrder = async (order) => {
    return fetch("http://localhost:5000/orders", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({...order}),
    }).then((res) => res.json());
}
