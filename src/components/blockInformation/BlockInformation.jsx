import React from 'react'
import './BlockInformation.scss'

const BlockInformation = ({
  position,
  date,
  time
}) => {
  return (
    <div className='Container-job'>
     <p className='Container-job-position'>{position}</p> 
     <div className="Container-job-date">
      <p className='Container-job-date-duration'>{date}</p> 
      <p className='Container-job-date-time'>{time}</p> 
     </div>
    </div>
  )
}

export default BlockInformation