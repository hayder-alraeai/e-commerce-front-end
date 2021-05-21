import React, { useEffect, useState } from 'react'
import '../styles/ShoppingCart.css'
import {backendPath} from '../config/Config'
const ShoppingCart = ({addToCart, handleTotalItemsInNavBarAndTotalPrice, totalPrice, cleanShoppingCart}) => {
    const[firstName, setFirstName] = useState('')
    const[lastName, setLastName] = useState('')
    const[email, setEmail] = useState('')
    const[address, setAddress] = useState('')
    const[zipCode, setZipCode] = useState(0)
    const[state, setState] = useState('')
    const[isOrdered, setIsOrdered] = useState(false)

    const submitOrder = e => {
        e.preventDefault()
        let orderProduct = {"productId": '', "quantity": 0}
        let orderProducts = []
        for(let i = 0; i < addToCart.length; i ++){
            orderProduct = {"productId": addToCart[i].id, "quantity": addToCart[i].quantity}
            orderProducts.push(orderProduct)
        }
        let data = {"products": orderProducts,
         "firstName": firstName, 
         "lastName": lastName,
          "email": email, 
          "address": address,
           "zipCode": zipCode, 
           "state": state}
        console.log(data)
        addOrder(data)
        setIsOrdered(true)
        cleanShoppingCart()

    }

    const addOrder = async(data) => {
        await fetch(backendPath + '/api/orders', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if(response.ok){
                alert('the item has been saved')
            }else{
                alert('something went wrong!' + response.statusText)
                console.log(response.text())
                console.log(response.status)
            }
        })
    } 
    if(isOrdered){
        return(
            <div>
                <p>Thank you for purchasing</p>
            </div>
        )
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
                                    <div>{item.productPrice} SEK</div>
                                    <div className="quantity-wrapper">
                                        <div className="minus" onClick={() => handleTotalItemsInNavBarAndTotalPrice('minus', item)}>-</div>
                                        <div className="quantity">{item.quantity}</div>
                                        <div className="plus" onClick={() => handleTotalItemsInNavBarAndTotalPrice('plus', item)}>+</div>
                                    </div>
                                    <div className='item-total-price'>{item.productPrice * item.quantity} SEK</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="leverans-wrapper">
                <div className="adress-info">
                <div className="total-price"> {totalPrice ? 'Total price: ' + totalPrice + ' SEK' : 'Your shoppingscart is empty'}</div>
                    {totalPrice ? <form onSubmit={submitOrder}>
                        <input type="text" placeholder="First name" onChange={e => setFirstName(e.target.value)} />
                        <input type="text" placeholder="Last name" onChange={e => setLastName(e.target.value)} />
                        <input type="email" placeholder="Email@example.com" onChange={e => setEmail(e.target.value)} />
                        <input type="text" placeholder="Adress" onChange={e => setAddress(e.target.value)}/>
                        <input type="number" placeholder="Zip code " onChange={e => setZipCode(e.target.value)}/>
                        <input type="text" placeholder="State " onChange={e => setState(e.target.value)}/>
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