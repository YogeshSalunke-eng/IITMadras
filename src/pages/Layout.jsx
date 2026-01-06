import React from 'react'
import Navbar from '../componts/Navbar/Navbar'
import Footer from '../componts/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Program from '../componts/Program/Program'
function Layout() {
  return (
    <>
      <Navbar />
      <div className="container">

        <Outlet /> 
      </div>
      <Footer /> 
    </>
  )
}

export default Layout;