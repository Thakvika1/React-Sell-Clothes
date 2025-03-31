import React from 'react'
import { useState } from 'react'
import { clothesData } from '../../data/clothesData'
import FilterClothesType from '../FilterClothesType'
import Tapbar from '../../components/Tapbar'
import FilterClotheSize from '../FilterClotheSize'

function Boypage() {
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
            <FilterClotheSize selected={selected} data={clothesData} type={'Boy'} />
          ) : (
            <FilterClothesType type={'Boy'} data={clothesData} />
          )}
        </div>
      </div>
    </>
  )
}

export default Boypage
