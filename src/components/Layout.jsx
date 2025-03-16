import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <div className='main'>
      <Header />
      <div className='body'>
        <div className="container">
          <div className='bodyInner'>
            <Sidebar />
            <div className='pages'>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
