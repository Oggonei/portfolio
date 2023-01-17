import React from 'react'
import Header from '../../components/header/Header'
import './DefaultLayout.scss'
import { Outlet } from 'react-router-dom'


const DefaultLayout = () => {
  return (
    <>
      <Header></Header>
      <Outlet/>
    </>
  )
}

export default DefaultLayout