import React from 'react'
import Header from './components/Header/Header'
// import Home from './components/home/home'
import Footer from './components/Footer/footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
