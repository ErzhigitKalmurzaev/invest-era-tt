import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from '../pages/MainPage'
import TablePage from '../pages/TablePage'

const MainRoute = () => {
  return (
    <Routes>
        <Route path='' element={<MainPage />} />
        <Route path='/:slug' element={<TablePage />} />
    </Routes>
  )
}

export default MainRoute
