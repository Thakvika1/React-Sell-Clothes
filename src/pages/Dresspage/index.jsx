import React from 'react'
import { clothesData } from '../../data/clothesData'
import FilterClothesType from '../FilterClothesType'

function Dresspage() {
  return (
    <div className="container">
      <div className="bodyContainer">
        <FilterClothesType type={'Dress'} data={clothesData} />
      </div>
    </div>
  )
}

export default Dresspage
