import React, { useEffect } from 'react'
import { Button, Col, Container, NavLink, Row } from 'react-bootstrap'
import BigHeading from '../../components/BigHeading'
import { services } from '../../constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ArrowBtn from '../../components/ArrowBtn'
import { LinkContainer } from 'react-router-bootstrap'


const Solutions = () => {
  return (
    <section className='solutions__sec py-5'>
        <Container className='py-5'>
            <div data-aos="fade-right">
                <BigHeading insight="What We Do" title="Multi-Disciplined Engineering" highlight="Solutions" color="#1a1c20"/>
            </div>
            <Row className='py-4'>
                    {services && services.map((service) =>(
                    <Col lg={4} key={service.id} className='col__con my-3 '>
                        <div className='sol__con p-2 p-sm-4' data-aos="fade-up">

                        <div className='icon__con'><FontAwesomeIcon icon={service.icon} /></div>
                        <div className='text__con'>
                            <h4>{service.title}</h4>
                            <p>{service.description}</p>
                        </div>
                        <LinkContainer to={`/services/${service.id}`}>
                            <NavLink>
                            <ArrowBtn title="Details" color="#0da574"/>
                            </NavLink>


                        </LinkContainer>
                        </div>
                    </Col>
                    ))}
            </Row>
        </Container>
    </section>
  )
}

export default Solutions