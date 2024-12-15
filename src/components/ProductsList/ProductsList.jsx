import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./style.css"
import { usePagenation } from '../Context/PaginationContext'

function ProductsList(props) {
    const {productsData ,searchInputValue}=props
    const {addToCart}=usePagenation();
    const navigate=useNavigate();

    const handleProductClick=(id)=>{
      navigate(`/product/${id}`)
    }

  
  return (
    <>
    {productsData.filter(product=>product.title.toLowerCase().includes(searchInputValue.toLowerCase())).map(product=>{
              const onClickProductCard=()=>{
                handleProductClick(product.id)
              }

       return (
            <div key={product.id} className='product-card'>
                <img src={product.image} alt={product.title} className='product-image' onClick={onClickProductCard}/>
                  <h2 className='product-title'>{product.title}</h2>
                  <p className='product-price'>${product.price}</p>
                  <p className='product-rating'>Rating:<span>{product.rating.rate}</span></p>
              <button className='add-cart-btn' onClick={()=>addToCart(product)}>Add to Cart</button>
        </div>)})}
  </>
  )
}

export default ProductsList