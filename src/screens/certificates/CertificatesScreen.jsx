import React from 'react'
import './CertificatesScreen.scss'
import ProfileButton from '../../components/profileButton/ProfileButton'
import { Link } from 'react-router-dom'
import Certificate from '../../components/certificate/Certificate'
import udemy1 from '../../assets/images/certificates/udemy/udemy1.JPG'
import platzy1 from '../../assets/images/certificates/platzy/platzy1.JPG'
import platzy2 from '../../assets/images/certificates/platzy/platzy2.JPG'
import platzy3 from '../../assets/images/certificates/platzy/platzy3.JPG'
import platzy4 from '../../assets/images/certificates/platzy/platzy4.JPG'
import platzy5 from '../../assets/images/certificates/platzy/platzy5.JPG'
import platzy6 from '../../assets/images/certificates/platzy/platzy6.JPG'
import platzy7 from '../../assets/images/certificates/platzy/platzy7.JPG'
import platzy8 from '../../assets/images/certificates/platzy/platzy8.JPG'
import platzy9 from '../../assets/images/certificates/platzy/platzy9.JPG'
import platzy10 from '../../assets/images/certificates/platzy/platzy10.JPG'
import platzy11 from '../../assets/images/certificates/platzy/platzy11.JPG'
import platzy12 from '../../assets/images/certificates/platzy/platzy12.JPG'
import platzy13 from '../../assets/images/certificates/platzy/platzy13.JPG'
import platzy14 from '../../assets/images/certificates/platzy/platzy14.JPG'
import platzy15 from '../../assets/images/certificates/platzy/platzy15.JPG'
import platzy16 from '../../assets/images/certificates/platzy/platzy16.JPG'
import platzy17 from '../../assets/images/certificates/platzy/platzy17.JPG'
import platzy18 from '../../assets/images/certificates/platzy/platzy18.JPG'
import platzy19 from '../../assets/images/certificates/platzy/platzy19.JPG'
import platzy20 from '../../assets/images/certificates/platzy/platzy20.JPG'
import platzy21 from '../../assets/images/certificates/platzy/platzy21.JPG'
import platzy22 from '../../assets/images/certificates/platzy/platzy22.JPG'
import platzy23 from '../../assets/images/certificates/platzy/platzy23.JPG'
import platzy24 from '../../assets/images/certificates/platzy/platzy24.JPG'
import platzy01 from '../../assets/images/certificates/platzy/platzy01.JPG'
import platzy02 from '../../assets/images/certificates/platzy/platzy02.JPG'
import platzy03 from '../../assets/images/certificates/platzy/platzy03.JPG'

const platzy =[
  platzy01,
  platzy02,
  platzy03,
  platzy1,
  platzy23,
  platzy2,
  platzy3,
  platzy24,
  platzy4,
  platzy5,
  platzy6,
  platzy7,
  platzy8,
  platzy9,
  platzy10,
  platzy11,
  platzy12,
  platzy22,
  platzy13,
  platzy14,
  platzy15,
  platzy16,
  platzy17,
  platzy18,
  platzy19,
  platzy20,
  platzy21,
]

const CertificatesScreen = () => {
  return (
    <div className='certificates-container'>
      <div className="certificates-container-title">
        <p>Udemy</p>
      </div>
      <div className='certificates-container-udemy'>
        <Certificate image={udemy1}/>
      </div>
      <div className="certificates-container-title">
        <p>Platzy</p>
      </div>
      <div className='certificates-container-platzy'>
        {platzy.map((item) => {
          return(
            <Certificate image={item}/>
          )
        })}
      </div>
      <Link to='/profile'>
        <ProfileButton/>
      </Link>
    </div>
  )
}

export default CertificatesScreen