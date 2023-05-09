import React from 'react'

const BigHeading = ({insight,title,highlight,color}) => {
  return (
    <div className='heading__con'>
        <p data-aos="fade-down" style={{color:`${color}`}}>{insight}</p>
        <h2 data-aos="fade-right" style={{color:`${color}`}} className='d-flex flex-wrap d-sm-block'>{title}<span className='ms-sm-3'>{highlight}</span></h2>
    </div>
  )
}

export default BigHeading