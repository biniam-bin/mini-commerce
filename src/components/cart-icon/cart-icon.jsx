import React, {useContext} from 'react';
import shoppingBag from "../../assets/shopping-cart.png";
import './cart-icon.styles.scss';
import { CartContext } from '../../context/cart-context';
import {withRouter} from "react-router-dom"

function CartIcon({history}) {
    const {itemCount, cartItems} =  useContext(CartContext)
    return (
        <div className='cart-container' onClick={() => history.push("/cart")}>
            <img src={shoppingBag} alt="" />
            {
                itemCount > 0 ? <span className="cart-count">{ itemCount }</span> : null
            }
            
        </div>
    )
}

export default withRouter(CartIcon);
