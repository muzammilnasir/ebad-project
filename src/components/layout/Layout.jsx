import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'
import ScrollToTop from '../specialcase/ScrollToTop'
import ShoppingIcon from '../specialcase/ShoppingIcon'

function Layout() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <ShoppingIcon />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
