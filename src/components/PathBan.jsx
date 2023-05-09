import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'

const PathBan = ({title,heading}) => {
 
    const {pathname} = useLocation();

    const label = pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2)
  return (
    <div className='path__ban__sec'>
        <Container className='d-flex flex-column justify-content-center h-100'>
        <p data-aos="fade-right" data-aos-duration="1000">{title}</p>
        <h1  data-aos="fade-right" data-aos-duration="1500">{heading}</h1>
        <p className='d-flex align-items-center gap-4' data-aos="fade-right" data-aos-duration="2000">Home <FontAwesomeIcon icon={faMinus} /> {label}</p>
        </Container>
    </div>
  )
}

export default PathBan