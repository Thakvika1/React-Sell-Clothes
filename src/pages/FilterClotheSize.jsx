import React from 'react'
import ProductCard from '../components/ProductCard'

function FilterClotheSize({ selected, data, filteredData = [], type }) {
  if (selected === '0-12 months') {
    filteredData = data.filter(
      (listItem) =>
        listItem.size === '0-3 months' ||
        listItem.size === '3-6 months' ||
        listItem.size === '6-9 months' ||
        listItem.size === '9-12 months'
    )
  } else if (selected === '1-2 years') {
    filteredData = data.filter(
      (listItem) =>
        listItem.size === '12-18 months' ||
        listItem.size === '18-24 months' ||
        listItem.size === '1-2 years'
    )
  }

  // const filterClothebyType = filteredData.filter((item) => item.type === type)

  return filteredData.map((item, index) => (
    <ProductCard
      key={index}
      image={item.image}
      type={item.type}
      price={item.price}
      size={item.size}
    />
  ))
}

export default FilterClotheSize
