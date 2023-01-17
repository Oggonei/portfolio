import React from 'react'
import './Certificate.scss'

const Certificate = ({
  title,
  image
}) => {
  return (
    <div className="certificate-container">
      {title && <div className='certificate-container-title'>{title}</div>}
      <div className='certificate-container-image'>
        <img className='certificate-container-image__image' src={image} alt="" />
      </div>
    </div>
  )
}

export default Certificate