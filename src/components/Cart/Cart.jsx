import React from 'react'

import "./style.css"

import { MdDeleteOutline } from "react-icons/md";


import { usePagenation } from '../Context/PaginationContext'

function Cart() {
  const {cart}=usePagenation();

  const CartItem=()=>{
    return (
      <div className='cart-items-container'>
        <h1>Cart</h1>
        {cart.map(eachProduct=>(
          <div className='cart-item' key={eachProduct.id}>
          <img className='cart-item-image' src={eachProduct.image}/>
          <div className='title-quantity-container'>
            <p className='cart-item-title'>{eachProduct.title}</p>
            <div className='quantity-container'>
              <button className='quantity-button'>-</button>
              <p>0</p>
              <button className='quantity-button'>+</button>
            </div>
            </div>
            <button className='delete-button'>
            <MdDeleteOutline/>
            </button>
        </div>))}
      </div>
    )
  }

  return (
    <div className='cart-container'>
      {cart.length===0?<h1 className='cart-is-empty'>Cart is empty</h1>:<CartItem/>}
    </div>
  )
}

export default Cart