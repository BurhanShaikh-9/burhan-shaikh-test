import React from 'react'
import { TbSearch } from "react-icons/tb";
import Svg from './Svg';

const Searchbar = () => {
  return (
    <div className='searchBar'>
        <Svg/>
        <input type="text" placeholder='Search'/>
    </div>
  )
}

export default Searchbar
