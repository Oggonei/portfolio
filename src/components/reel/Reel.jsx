import React from 'react'
import './Reel.scss'
import bike1 from '../../assets/images/reel/bike1.JPG'
import bike2 from '../../assets/images/reel/bike2.JPG'
import bike3 from '../../assets/images/reel/bike3.JPG'
import run1 from '../../assets/images/reel/run1.JPG'
import run2 from '../../assets/images/reel/run2.JPG'
import run3 from '../../assets/images/reel/run3.JPG'
import run4 from '../../assets/images/reel/run4.JPG'
import run5 from '../../assets/images/reel/run5.JPG'
import run6 from '../../assets/images/reel/run6.JPG'
import run7 from '../../assets/images/reel/run7.JPG'
import run8 from '../../assets/images/reel/run8.JPG'

const images = [
  run1,
  run2,
  run3,
  run4,
  run5,
  run6,
  run7,
  run8,
  bike1,
  bike2,
  bike3,
]

const Reel = () => {
  return (
    <div className='reel-container'>
      {images.map((element) => {
        return(
          <img src={element} alt='leisure{index}'/>
        )
      })}
    </div>
  )
}

export default Reel