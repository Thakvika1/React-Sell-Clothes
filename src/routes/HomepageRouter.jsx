import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomepageLayout from '../Layouts/HomepageLayout'
import Homepage from '../pages/Homepage'
import Boypage from '../pages/Boypage'
import Girlpage from '../pages/Girlpage'
import Dresspage from '../pages/Dresspage'
import CreatePost from '../pages/CreatePost'

function HomepageRouter() {
  return (
    <>
      <Routes>
        <Route element={<HomepageLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/boy" element={<Boypage />} />
          <Route path="/girl" element={<Girlpage />} />
          <Route path="/dress" element={<Dresspage />} />
          <Route path="/CreatePost" element={<CreatePost />} />
        </Route>
      </Routes>
    </>
  )
}

export default HomepageRouter
