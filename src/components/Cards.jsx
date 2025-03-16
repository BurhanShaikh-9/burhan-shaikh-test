import React, { useState } from 'react'
import { CiBookmark } from "react-icons/ci";
import jobImg from '../assets/images/teams.png'
import Button from './Button';
import { SlLocationPin } from "react-icons/sl";
import { GoClock } from "react-icons/go";
import { CiBookmarkCheck } from "react-icons/ci";



const Cards = () => {
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };
  return (
    <div className='cardMain'>
      <p className='fs13'>Promoted</p>
      <div className='jobAbout'>
        <img src={jobImg} alt="" />
        <div> <p className='fs3'>UI/UX Designer</p><p className='fs14'>Teams</p></div>
      </div>
      <div className='jobLoc'> <SlLocationPin /> <p className='fs4'>Seattle, USA (Remote)</p></div>
      <div className='jobLoc'><GoClock /><p className='fs4'>1 day ago<span>22 applicants</span> </p></div>
      <div className='applyJob'>
        <Button text="Apply Now"></Button>
        <span className='bookmarkIcon' onClick={toggleBookmark}>
          {bookmarked ? <CiBookmarkCheck className="activeBookmark" /> : <CiBookmark />}
        </span>
      </div>

    </div>
  )
}

export default Cards
