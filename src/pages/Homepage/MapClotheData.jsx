import React from 'react'
import ProductCard from '../../components/ProductCard'

function MapClotheData({ data }) {
  // render data
  const renderClothesData = data.map((item, index) => (
    <ProductCard
      key={index}
      image={item.image}
      type={item.type}
      price={item.price}
      size={item.size}
    />
  ))

  return <>{renderClothesData}</>
}

export default MapClotheData
