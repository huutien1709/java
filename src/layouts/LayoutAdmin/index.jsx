import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'


const LayoutAdmin = () => {
  return (
    <div>
      <Header/>
      <section className='maincontent'>
      <Outlet/>
      </section>
      <Footer/>
    </div>
  )
}

export default LayoutAdmin
