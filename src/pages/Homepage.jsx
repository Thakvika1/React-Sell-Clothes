import React from 'react'
import '../styles/homepage.css'
import ProductCard from '../components/ProductCard'
import { clothesData } from '../data/clothesData'
import { useState } from 'react'
import Tapbar from '../components/Tapbar'

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

  const [selected, setSelected] = useState(null)
  const [filterData, setFilterData] = useState(false)

  const filterClothesBySize = () => {
    let filteredData = []

    if (selected === '0-12 months') {
      filteredData = clothesData.filter(
        (listItem) =>
          listItem.size === '0-3 months' ||
          listItem.size === '3-6 months' ||
          listItem.size === '6-9 months' ||
          listItem.size === '9-12 months'
      )
    } else if (selected === '1-2 years') {
      filteredData = clothesData.filter(
        (listItem) =>
          listItem.size === '12-18 months' ||
          listItem.size === '18-24 months' ||
          listItem.size === '1-2 years'
      )
    }

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

  const handleClick = (item) => {
    setSelected(item)
    setFilterData(true)
  }

  return (
    <>
      <Tapbar selected={selected} handleClick={handleClick} />
      <div className="container">
        <div className="bodyContainer">
          {filterData ? filterClothesBySize() : renderClothesData}
        </div>
      </div>
    </>
  )
}

export default Homepage
