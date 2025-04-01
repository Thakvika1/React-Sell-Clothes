import React from 'react'
import { clothesData } from '../../data/clothesData'
import { useState } from 'react'
import FilterClothesType from '../FilterClothesType'
import Tapbar from '../../components/Tapbar'
import FilterClotheSize from '../FilterClotheSize'

function Dresspage() {
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
              type={'Dress'}
            />
          ) : (
            <FilterClothesType type={'Dress'} data={clothesData} />
          )}
        </div>
      </div>
    </>
  )
}

export default Dresspage
