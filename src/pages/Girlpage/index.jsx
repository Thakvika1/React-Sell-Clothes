import React from 'react'
import { clothesData } from '../../data/clothesData'
import FilterClothesType from '../FilterClothesType'

function Girlpage() {
  return (
    <div className="container">
      <div className="bodyContainer">
        <FilterClothesType type={'Girl'} data={clothesData} />
      </div>
    </div>
  )
}

export default Girlpage
