import React from 'react'
import './Box.scss'
import Tittle from '../tittle/Tittle'

const Box = ({
  title,
  children
}) => {
  return (
    <div className='box'>
      <Tittle title={title}/>
      {children}
    </div>
  )
}

export default Box