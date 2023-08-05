import React from 'react'

// import css
import './ShoppingCart.scss'

// import dependencies components
import ProductList from './ProductList'
import ShoppingCart from './ShoppingCart'

export default function Index() {
  return (
    <div className="shoppingCart_container">
    {/* Product List */}
    <ProductList></ProductList>
    {/* Shopping Cart */}
    <ShoppingCart/>
  </div>
  )
}
