import React from 'react'
import { clothesData } from '../../data/clothesData'
import { useState } from 'react'
import Tapbar from '../../components/Tapbar'
import FilterClotheSize from '../FilterClotheSize'
import FilterClothesType from '../FilterClothesType'

function Homepage() {
  const [selected, setSelected] = useState(null)
  const [filterData, setFilterData] = useState(false)

  const handleClick = (item) => {
    setSelected(item)
    setFilterData(true)
  }

  return (
    <>
      <Tapbar selected={selected} handleClick={handleClick} />
      <div className="container">
        <div className="bodyContainer">
          {filterData ? (
            <FilterClotheSize
              selected={selected}
              data={clothesData}
              type={'explore'}
            />
          ) : (
            <FilterClothesType type={'explore'} data={clothesData} />
          )}
        </div>
      </div>
    </>
  )
}

export default Homepage
