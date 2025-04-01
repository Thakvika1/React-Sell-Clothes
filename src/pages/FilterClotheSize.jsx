import React from 'react'
import ProductCard from '../components/ProductCard'
import {
  smallSize,
  mediumSize,
  bigSize,
  biggerSize,
  moreBiggerSize,
} from '../data/clothesSize'

function FilterClotheSize({ selected, data, filteredData = [], type }) {
  if (selected === '0-12 months') {
    filteredData = data.filter((listItem) => smallSize.includes(listItem.size))
  } else if (selected === '1-2 years') {
    filteredData = data.filter((listItem) => mediumSize.includes(listItem.size))
  } else if (selected === '2-4 years') {
    filteredData = data.filter((listItem) => bigSize.includes(listItem.size))
  } else if (selected === '4-5 years') {
    filteredData = data.filter((listItem) => biggerSize.includes(listItem.size))
  } else if (selected === '5 years+') {
    filteredData = data.filter((listItem) =>
      moreBiggerSize.includes(listItem.size)
    )
  }

  const filterClothesData = filteredData.filter((item) => item.type === type)

  const typeFilter =
    type === 'explore'
      ? filteredData
      : type === 'Boy' || type === 'Girl' || type === 'Dress'
        ? filterClothesData
        : null

  const mapClothesData = typeFilter.map((item, index) => (
    <ProductCard
      key={index}
      image={item.image}
      type={item.type}
      price={item.price}
      size={item.size}
    />
  ))

  return <>{mapClothesData}</>
}

export default FilterClotheSize
