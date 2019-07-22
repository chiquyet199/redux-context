
import React from 'react'
import Button from '../Button'
import './index.css'

function ProductItem(props) {
  const { name, price, onClick, productImg } = props
  return (
    <div className="product">
      <div className="imgContainer">
        <img className="productImg" src={productImg}></img>
        <Button onClick={onClick} text="Add to cart" />
      </div>
      <h3 className="productName">{name}</h3>
      <span className="productPrice">{price}</span>

    </div>
  )
}

export default ProductItem