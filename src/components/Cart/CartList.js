import React, { Component } from 'react';
import CartItem from './CartItem';

export default function CartList({value}) {
    const {cart} = value;
    console.log("value:", value );
    console.log("cart:", cart);
     
    return (
        <div className="container-fluid">
            {cart.map( item=>{
                return <CartItem key={item.id} item={item} value={value}/>
                })

            } 
            
        </div>
        /*
       <div>
        Hello from cart list
        <CartItem />

       </div>
       */

    );
}
