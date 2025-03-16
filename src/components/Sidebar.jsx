import React, { useState } from 'react'
import profileImg from '../assets/images/profilePic.png'
import { IoIosArrowDown } from "react-icons/io";



const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='sidebarMain'>
      <div className='sidebarProfile'>
        <div className='sidebarBanner'></div>
        <div className='sidebarAbout'>
          <div className="fs2">Albert Flores</div>
          <div className="designation fs3">Senior Product Designer  |  UI/UX Designer  |  Graphic Designer  |  Web Developer</div>
          <div className="fs4">Clinton, Maryland</div>
        </div>
        <img className='sidebarImg' src={profileImg} alt="" />
      </div>
      <div className="sidebarStats">
        <ul>
          <li><p className='fs3'>Profile Visitors</p><p className='fs5'>140</p></li>
          <li><p className='fs3'>Resume Viewers</p><p className='fs5'>20</p></li>
          <li><p className='fs3'>My Jobs</p><p className='fs5'>88</p></li>
        </ul>
      </div>
      <div className="sidebarCalendar">
        <div className="dropdown">
          <button onClick={toggleDropdown} className="dropdown-btn">
            <div>
              <p className='fs7'>
                My calendar
              </p>
              <p className='fs8'>Upcoming Interviews</p>
            </div>
            <div className='dropdownArrow'>
              <IoIosArrowDown />
            </div>
          </button>
          <div className={`dropdown-menu content-center ${isOpen ? 'open' : ''}`}>
            <div>
              NO INTERVIEW SCHEDULE
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
