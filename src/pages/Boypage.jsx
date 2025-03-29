import React from 'react'
import '../styles/boypage.css'
import ProductCard from '../components/ProductCard'
import { clothesData } from '../data/clothesData'

function Boypage() {
  // Filter data correctly
  const filterClothesData = clothesData.filter((item) => item.type === 'Boy')

  // Render filtered data
  const renderClothesData = filterClothesData.map((item, index) => (
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

export default Boypage
