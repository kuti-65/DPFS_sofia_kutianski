// import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Catalog } from '../catalog/Catalog'
import { Counter } from '../counter/Counter'
import { LastProduct } from '../lastproduct/LastProduct'
import { ProductDetail } from '../productdetail/ProductDetail'
import './dashboard.css'

export const Dashboard = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={
          <div className='container-dashboard'>
            <div className="left-navbar">barra de navegacion</div>
            <div className="dash-CC">
              <div className="count-last">
              <Counter />
              <LastProduct/>
              </div>
              <Catalog />
            </div>
          </div>
        } />
        <Route path='/catalog' element={
          <>
            <Catalog />
          </>
        } />
        <Route path='/last-product' element={
          <>
            <LastProduct />
          </>
        } />
        <Route path='/counter' element={
          <>
            <Counter />
          </>
        } />
        <Route path='/product-detail/:id' element={
          <>
            <ProductDetail />
          </>
        } />
      </Routes>

    </>
  )
}