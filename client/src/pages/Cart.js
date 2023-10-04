import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import {getCart, postOrder} from "../service/CRUDCart";


export default function Cart() {
    const [cart, setCart] = useState(null);
    const navigate = useNavigate();
    console.log(cart)

    useEffect(() => {
        getCart()
            .then((cart) => {
                setCart(cart);
            })
    }, []);

    const total = (movieCart) => {
        return movieCart.reduce((accumulator, currentValue) => {
            currentValue = currentValue.Price;
            accumulator += currentValue;
            return accumulator
        }, 0)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const entries = [...formData.entries()];

        const client = entries.reduce((acc, entry) => {
            const [k, v] = entry;
            acc[k] = v;
            return acc;
        }, {});

        const order = {
            client: {
                name: client.name,
                phone: client.number,
                email: client.email,
                address: client.address
            },
            products: cart.map(item => (
                {
                    Title: item.Title,
                    Quantity: item.Quantity,
                    Price: item.Price
                }
            ))
        }

        navigate("/");
        postOrder(order).then(r => console.log("The order has been placed successfully!"));
    }

    return (
        <>
            {cart?.length ? (<div className='checkout-page'>
                <form onSubmit={onSubmit}>
                    <div className='products'>
                        {cart && cart.map(cartItem => (
                            <div className='product' key={cartItem._id}>
                                <p><strong>{cartItem.Title}</strong> x{cartItem.Quantity}</p>
                                <p><strong>${cartItem.Price}</strong></p>
                            </div>
                        ))}
                        <div className='line'></div>
                        <div className='total'>
                            <p><strong>Total:</strong> {cart ? `$${total(cart).toFixed(2)}` : null}</p>
                        </div>
                    </div>
                    <div className='client'>
                        <div>
                            <label htmlFor="name">Name: </label>
                            <input required name="name" type="text"></input>
                        </div>
                        <div>
                            <label htmlFor="number">Number: </label>
                            <input required name="number" type="tel"></input>
                        </div>
                        <div>
                            <label htmlFor="email">Email: </label>
                            <input required name="email" type="email"></input>
                        </div>
                        <div>
                            <label htmlFor="address">Address: </label>
                            <input required name="address" type="text"></input>
                        </div>
                    </div>
                    <div className='submit-btn'>
                        <button type="submit" className='checkout'>Checkout</button>
                    </div>
                </form>
            </div>) : (
                <div className="no-products">
                    <p>You haven't added any movies yet.</p>
                </div>
            )}
        </>
    )
}
