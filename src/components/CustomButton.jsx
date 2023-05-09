import React from 'react'
import { Button } from 'react-bootstrap'

const CustomButton = ({title}) => {
  return (
    <Button className='yellow__btn'>{title}</Button>
  )
}

export default CustomButton