import React from 'react'
import { Link } from 'react-router-dom';
import './HeaderStyles.scss'
import { FaLinkedin, FaWhatsappSquare, FaGithubSquare, FaInstagramSquare } from "react-icons/fa";
import { ImMail } from "react-icons/im";


const Header = () => {
  return (
    <>
      <div className="header">
        <Link to="/">
          <h1 className='tittle'>oggonei.com</h1>
        </Link>
        <div className="social">
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/cristhiansantosoggonei/" target="_blanck"><FaLinkedin/></a>        
            <a href="https://wa.me/573214642753" target="_blanck"><FaWhatsappSquare/></a>        
            <a href="mailto:oggonei@hotmail.com" target="_blanck"><ImMail style={{fontSize: '27px'}}/></a>        
            <a href="https://github.com/Oggonei" target="_blanck"><FaGithubSquare/></a>        
            <a href="https://www.instagram.com/oggonei" target="_blanck"><FaInstagramSquare/></a>        
          </div>
        </div>
      </div>
    </>
  )
}

export default Header