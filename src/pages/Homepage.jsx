import React from 'react'
import '../styles/homepage.css'
import ProductCard from '../components/ProductCard'
import { clothesData } from '../data/clothesData'

function Homepage() {
  // render data
  const renderClothesData = clothesData.map((item, index) => (
    <ProductCard
      key={index}
      image={item.image}
      type={item.type}
      price={item.price}
      size={item.size}
    />
  ))

  return (
    <div className="container">
      <div className="bodyContainer">{renderClothesData}</div>
    </div>
  )
}

export default Homepage
