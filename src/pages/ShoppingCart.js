import React, { useEffect, useState } from 'react'
import '../styles/ShoppingCart.css'
import {backendPath} from '../config/Config'
const ShoppingCart = ({addToCart}) => {
    const [totalPrice, setTotalPrice] = useState(0)
    const [count, setCount] = useState(0)
    useEffect(() => {
        calcTotalPrice()
    },[])
    const calcTotalPrice = () => {
       for(let i = 0; i < addToCart.length; i ++){
            setTotalPrice(price => price + addToCart[i].productPrice)
       }
    }
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
                                    <p>{item.productPrice}</p>
                                    <p className="minus" onClick={() => setCount(c => c - 1)}>-</p>
                                    <p>{item.quantity}</p>
                                    <p className="plus" onClick={() => setCount(c => c + 1)}>+</p>
                                    <p>{item.productPrice * 2}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="leverans-wrapper">
                <div className="adress-info">
                <div className="total-price">Total price: {totalPrice}</div>
                    <form>
                        <input type="text" placeholder="Adress " />
                        <input type="number" placeholder="Zip code " />
                        <input type="text" placeholder="State " />
                        <input type="submit" value="Purchase" />
                    </form>
                </div>
            </div>
        </div>
    )
}
export default ShoppingCart