import React from 'react'
import ProductItem from '../ProductItem'
import './index.css'

function ProductList(props) {
  console.log('rerender product list')
  const {products, onClick} = props
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductItem key={product.id} onClick={() => {onClick(product)}} name={product.name} price={product.price} productImg={product.img} />
      ))}
    </div>
  )
}

export default React.memo(ProductList)
