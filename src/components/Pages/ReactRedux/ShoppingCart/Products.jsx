import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './products.scss';
import { useDispatch, useSelector } from 'react-redux';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

const Products = () => {
    const dispatch = useDispatch();
    const productReducer = useSelector((state) => state.productReducer);

    useEffect(() => {
        dispatch({ type: 'GET_PRODUCTS' });
    }, []);

    const handleAddToCart = (product) => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
    };
    return (
        <div className="products">
            <div className="products-header">
                <div className="products-title">
                    <h3>Shop iPhone</h3>
                    <span>All models. Take your pick.</span>
                </div>
                <div className="products-action" data-title={productReducer.cartArr.length}>
                    <Link to="/e-commerce/checkout">
                        <ShoppingCartRoundedIcon className="products-icon" />
                    </Link>
                </div>
            </div>

            <div className="products-lists">
                {productReducer.products.map((product) => {
                    return (
                        <div className="products-item" key={product.id}>
                            <div className="products-item-name">{product.title}</div>
                            <img src={product.img} alt="" />

                            <div className="products-item-bottom">
                                <span className="products-item-text">Price: {product.price}</span>
                                <span className="products-item-text">
                                    Quantity: {product.inventory}
                                </span>
                                <button
                                    className={
                                        product.inventory > 0
                                            ? 'products-item-button'
                                            : 'products-item-button-disable'
                                    }
                                    onClick={() => handleAddToCart(product)}
                                >
                                    {product.inventory > 0 ? 'Add to cart' : ' Sold Out'}
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Products;
