import React from 'react'
import './InlineInformation.scss'
import {FaAngleDoubleRight} from "react-icons/fa"

const InlineInformation = ({
  logo,
  information,
  url
}) => {
  return (
      <div className='inlineInformation-container'>
        <div className='inlineInformation-container-logo'>
          {logo}
        </div>
        <div className="inlineInformation-container-information">
          {information}
        </div>
        {
          url &&
          <div className="inlineInformation-container-direct">
            <a href={url} target="_blanck">
              <FaAngleDoubleRight/>
            </a>
          </div>
        }
      </div>
  )
}

export default InlineInformation