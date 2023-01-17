import React from 'react'
import { Link } from 'react-router-dom'
import './Home.scss'

const HomeScreen = () => {
  return (
    <div className='home'>
      <div className="home-info">
        <h1 className='home-info-tittle'>Cristhian David Santos Oggonei</h1>
        <h2 className='home-info-proffesion'>Web Developer</h2>
        <Link to="profile">
          <button className='home-info-button'>View profile</button>
        </Link>
      </div>
    </div>
  )
}

export default HomeScreen