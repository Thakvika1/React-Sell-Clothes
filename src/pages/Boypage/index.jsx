import React from 'react'
import { clothesData } from '../../data/clothesData'
import FilterClothesType from '../FilterClothesType'

function Boypage() {
  return (
    <div className="container">
      <div className="bodyContainer">
        <FilterClothesType type={'Boy'} data={clothesData} />
      </div>
    </div>
  )
}

export default Boypage
