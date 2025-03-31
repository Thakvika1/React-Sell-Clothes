import React from 'react'
import ProductCard from '../components/ProductCard'

function FilterClothesType({ type, data }) {
  // Filter data correctly
  const filterClothesData = data.filter((item) => item.type === type)

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
  return <>{renderClothesData}</>
}

export default FilterClothesType
