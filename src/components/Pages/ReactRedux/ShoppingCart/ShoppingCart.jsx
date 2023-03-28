import React, { useState, useEffect } from 'react';
import './shoppingCart.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useCurrency } from '../../hooks';

const ShoppingCart = () => {
    const productReducer = useSelector((state) => state.productReducer);
    const [total, setTotal] = useState();
    const dispatch = useDispatch();
    const [formatCurrency] = useCurrency();

    const handleAddProduct = (product) => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
    };

    useEffect(() => {
        const getTotalPrice = () => {
            let totalPrice = 0;
            productReducer.cartArr.map((product) => {
                totalPrice += product.price * product.quantity;
            });
            setTotal(formatCurrency(totalPrice));
        };
        getTotalPrice();
    }, [productReducer]);

    return (
        <div className="shopping-cart">
            <h3 className="shopping-cart-title">Shopping cart</h3>

            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Image</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {productReducer.cartArr.map((cart, index) => {
                        return (
                            <tr key={cart.id}>
                                <td>{index + 1}</td>
                                <td>
                                    <img src={cart.img} alt="" />
                                </td>
                                <td>{cart.title}</td>
                                <td>{formatCurrency(cart.price)}</td>
                                <td>
                                    <div className="shopping-cart-action">
                                        <button className="shopping-cart-action-button">-</button>
                                        <p>{cart.quantity}</p>
                                        <button
                                            className="shopping-cart-action-button"
                                            onClick={() => handleAddProduct(cart)}
                                        >
                                            +
                                        </button>
                                    </div>
                                </td>
                                <td>
                                    <button className="button-remove">remove</button>
                                </td>
                                <td>{formatCurrency(cart.price * cart.quantity)}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <div className="shopping-cart-checkout">
                {productReducer.cartArr.map((cart, i) => {
                    return (
                        <div className="shopping-cart-checkout-item" key={cart.id}>
                            {cart.quantity > 1 ? (
                                <div className="shopping-cart-total">
                                    {cart.title} x {cart.quantity} :{' '}
                                    {formatCurrency(cart.price * cart.quantity)}
                                </div>
                            ) : (
                                <div className="shopping-cart-total">
                                    {cart.title} : {formatCurrency(cart.price * cart.quantity)}
                                </div>
                            )}
                        </div>
                    );
                })}
                {productReducer.cartArr.length === 0 ? (
                    <div className="shopping-cart-checkout-item">
                        <div className="shopping-cart-total">Your cart is empty</div>
                    </div>
                ) : (
                    <div className="shopping-cart-checkout-item d-flex flex-column ">
                        <div className="shopping-cart-total">Total = {total}</div>
                        <button className="shopping-cart-button mt-3">CheckOut</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ShoppingCart;
