export const getCart = async () => {
    try {
        return fetch("http://localhost:5000/cart").then(res => res.json());
    }catch (error){
        console.log(error.message);
    }
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
