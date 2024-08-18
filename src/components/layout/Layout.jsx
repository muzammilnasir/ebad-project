import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'
import ScrollToTop from '../specialcase/ScrollToTop'
import ShoppingIcon from '../specialcase/ShoppingIcon'
import DarkMode from '../specialcase/DarkMode'

function Layout() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <ShoppingIcon />
      <DarkMode />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
