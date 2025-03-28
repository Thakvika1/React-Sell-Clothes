import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomepageLayout from '../Layouts/HomepageLayout'
import Homepage from '../pages/homepage'
import Boypage from '../pages/Boypage'
import Girlpage from '../pages/Girlpage'
import Dresspage from '../pages/Dresspage'

function HomepageRouter() {
  return (
    <>
      <Routes>
        <Route element={<HomepageLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/boy" element={<Boypage />} />
          <Route path="/girl" element={<Girlpage />} />
          <Route path="/dress" element={<Dresspage />} />
        </Route>
      </Routes>
    </>
  )
}

export default HomepageRouter
