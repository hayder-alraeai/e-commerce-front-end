import React, { useEffect, useState } from 'react'
import '../styles/ShoppingCart.css'
import {backendPath} from '../config/Config'
const ShoppingCart = ({addToCart, handleTotalItemsInNavBarAndTotalPrice, totalPrice}) => {


    return(
        <div className="shopping-cart-body">
            <div className="items-wrapper" >
                <div className="items">
                    {addToCart.map(item => {
                        return(
                            <div key={item.id}>
                                <div className="item-title">
                                    {item.productDescription}
                                </div>
                                <div className="item-body">
                                    <img src={backendPath + "/api/images/" + item.imageId} />
                                    <div>{item.productPrice} SEK</div>
                                    <div className="quantity-wrapper">
                                        <div className="minus" onClick={() => handleTotalItemsInNavBarAndTotalPrice('minus', item)}>-</div>
                                        <div className="quantity">{item.quantity}</div>
                                        <div className="plus" onClick={() => handleTotalItemsInNavBarAndTotalPrice('plus', item)}>+</div>
                                    </div>
                                    <div>{item.productPrice * item.quantity} SEK</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="leverans-wrapper">
                <div className="adress-info">
                <div className="total-price"> {totalPrice ? 'Total price: ' + totalPrice + ' SEK' : 'Your shoppingscart is empty'}</div>
                    {totalPrice ?                     <form>
                        <input type="text" placeholder="First name" />
                        <input type="text" placeholder="Last name" />
                        <input type="text" placeholder="Adress " />
                        <input type="number" placeholder="Zip code " />
                        <input type="text" placeholder="State " />
                        <input type="submit" value="Purchase" />
                    </form> :
                        null
                    }
                </div>
            </div>
        </div>
    )
}
export default ShoppingCart