import React from 'react'
import logo from '../assets/images/logo.png'
import profilePic from '../assets/images/profilePic2.png'
import Searchbar from './Searchbar'
import Button from './Button'
import SideDrawer from './Drawer'

const Header = () => {


  const nav = [
    { name: "Find Jobs", link: "", isActive: true },
    { name: "Top Companies", link: "", isActive: false },
    { name: "Job Tracker", link: "", isActive: false },
    { name: "My Calendar", link: "", isActive: false },
    { name: "Documents", link: "", isActive: false },
    { name: "Messages", link: "", isActive: false },
    { name: "Notifications", link: "", isActive: false },
  ]

  return (
    <header className='container'>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="desktopHeader">
        <nav >
          <ul>
            {nav.map((item, index) => (
              <li key={index}> <a href="" className={`fs1 ${item.isActive ? 'active' : ''}`}>{item.name}</a> </li>
            ))}
          </ul>
        </nav>
        <Searchbar />
        <Button text="Resume Builder" />
        <img className='profile' src={profilePic} alt="" />
      </div>

      <div className="mobileHeader">
        <SideDrawer nav={nav} />
      </div>

    </header>
  )
}

export default Header
