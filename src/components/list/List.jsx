import React from 'react'
import './List.scss'

const List = ({
  functions
}) => {
  return (
    <div className='list'>
        <ul className='list-ul'>
          {functions && functions.map((item,index) => {
            return(
              <li key={index}>
                {item}
              </li>
            )
          })}
        </ul>
    </div>
  )
}

export default List