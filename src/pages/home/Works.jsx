import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BigHeading from '../../components/BigHeading'
import { projects } from '../../constants'
import ArrowBtn from '../../components/ArrowBtn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { LinkContainer } from 'react-router-bootstrap'
import { NavLink } from 'react-router-dom'

const Works = ({projects,color}) => {
    
  return (
    <section className='work__sec py-5' style={{backgroundColor: color, color: color ==="#fff" ? "#1a1c20" : '#fff'}}>
        <Container className='pt-5'>
        <div data-aos="fade-right">
                <BigHeading insight="What We Have Done" title="Some Of Our" highlight="Projects" color={color === "#fff" ? "#1a1c20" : "#fff"}/>
            </div>
            <div className='py-5'>
                <Row>
                    {projects && projects.map((project)=>(
                        <Col lg={6} key={project.id} className='work__con'>
                            <div className='img__con mb-4' data-aos="fade-up-right">
                                <img className='w-100 h-100' src={project.thumbnail} alt='project' />
                            </div>
                            <div className='line' data-aos="fade-right"></div>
                            <div className='text__con mb-4'>
                                <h3>{project.name}</h3>
                                <div className='d-flex justify-content-between'>
                                    <p><FontAwesomeIcon icon={faLocationDot} />{project.location}</p>
                                    <LinkContainer to={`/projects/${project.id}`}>
                                        <NavLink>
                                            <ArrowBtn title="Details" color="#0da574"/>

                                        </NavLink>
                                    </LinkContainer>
                                </div>

                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </Container>
    </section>
  )
}

export default Works