import React from 'react'
import Dropdown from '../components/Dropdown'
import Button from '../components/Button'
import Svg from '../components/Svg';
import Cards from '../components/Cards';

const Home = () => {
  const location = [
    { label: 'karachi', value: 'karachi' },
    { label: 'Lahore', value: 'lahore' },
    { label: 'Islamabad', value: 'islamabad' },
  ]
  const jobType = [
    { label: 'On-site', value: 'onsite' },
    { label: 'Online', value: 'online' },
    { label: 'Hybrid', value: 'hybrid' },
  ]

  return (
    <div>
      <h2 className='fs9'>Find your Dream Job, <span>Albert!</span></h2>
      <p className='fs10'>Explore the latest job openings and apply htmlFor the best opportunities available today!</p>
      <div className="jobSearch">
        <input type="text" placeholder='Job Title, Company, or Keywords' />
        <Dropdown className='jobTypeDropdown' placeholder="Select Location" list={location} />
        <Dropdown className='locationDropdown' placeholder="Job Type" list={jobType} />
        <Button text="Search" icon={<Svg />} type="1" />
      </div>
      <div className="jobTags">
        <p className='fs1 '> Similar: </p>
        <div className="button-checkboxes">
          <input type="checkbox" id="option1" className="hidden-checkbox" />
          <label htmlFor="option1" className="checkbox-button fs1">Frontend</label>

          <input type="checkbox" id="option2" className="hidden-checkbox" />
          <label htmlFor="option2" className="checkbox-button fs1">Backend</label>

          <input type="checkbox" id="option3" className="hidden-checkbox" />
          <label htmlFor="option3" className="checkbox-button fs1">Graphic Designer</label>
        </div>
      </div>
      <p className='fs11'>Featured Jobs <a href="" className='fs12'>See Featured Jobs</a></p>
      <div className='jobContainer'>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
      <p className='fs11 mt-50'>Recommended Jobs <a href="" className='fs12'>See Recommended Jobs</a></p>
      <div className='jobContainer'>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  )
}

export default Home
