
import React from 'react'
import './reusable.css'

function Stars({ stars, setStars }) {
  // console.log(emptyArray)
  return (
    <div className='stars'>
      {[1, 2, 3, 4, 5].map((star) => {
        return (
          <span
            className='start'
            style={{
              cursor: 'pointer',
              color: stars >= star ? '#f68b1e' : 'gray',
              fontSize: `22px`,
            }}
          >
            {' '}★{' '}
          </span>
        )
      })}
    </div>
  )
}

export default Stars;