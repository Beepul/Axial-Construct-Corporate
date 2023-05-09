import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button } from 'react-bootstrap'

const ArrowBtn = ({title,color}) => {
  return (
    <Button className='arrow__btn' style={{color:`${color}`}}>{title}<FontAwesomeIcon icon={faArrowRight} /></Button>
  )
}

export default ArrowBtn