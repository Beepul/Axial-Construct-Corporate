import React from 'react'
import PathBan from '../../components/PathBan'
import { Col, Container, NavLink, Row } from 'react-bootstrap'
import BigHeading from '../../components/BigHeading'
import CustomButton from '../../components/CustomButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons'
import { LinkContainer } from 'react-router-bootstrap'

const About = () => {
  const list = ['Making lives easier', 'Get every solution right here', 'Innovation and creativity', 'Fine engineering only with us']

  return (
    <section className='about__sec'>
    <div>
      <PathBan title={"who we are"} heading={"Get To Know About Us"} />
    </div>
    <Container className='py-5'>
      <Row className='py-5'>
        <Col lg={6} className='right__top mb-5 mb-lg-0'>
          <BigHeading insight={"who we are"} title={"Bring Your Ideas and Innovation to"} highlight={"Life"} />
          <p>Our civil and structural team is committed to providing sustainable, creative & efficient engineering solutions for our communities</p>
          <ul>
            {list.map((item,index)=> (
              <li key={index} data-aos="fade-up" data-aos-delay="100"><FontAwesomeIcon icon={faArrowRight} />{item}</li>
            ))}
          </ul>
          <LinkContainer to={'/contact'}>
            <NavLink>
          <CustomButton title={"Consult Now"}/>
            </NavLink>
          </LinkContainer>
        </Col>
        <Col lg={6} className='ps-lg-4' data-aos="zoom-in-left">
          <img className='w-100' src='https://html.merku.love/axial/img/about/01.webp' alt='work' />
        </Col>
      </Row>
      <Row className='py-5'>
        <Col lg={6} className='order-2 order-lg-1' data-aos="zoom-in-right">
          <img className='w-100' src='https://images.pexels.com/photos/10202865/pexels-photo-10202865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='engineer' />
        </Col>
        <Col lg={6} className='order-1 order-lg-2 mb-5 mb-lg-0'>
          <div className='bottom__right ps-lg-4'>
            <BigHeading insight={"Trust in engineering"} title={"Our Team is Responsible for The"} highlight={"Best Construction"}/>
            <p className='py-4'>Leo in vitae turpis massa sed elementum tempus egestas sed. Sed sed risus pretium quam vulputate dignissim suspendisse in. </p>
            <div className='d-flex flex-wrap align-items-end justify-content-between'>
            <ul>
              {list.map((item,index)=>(
                <li key={index} data-aos="fade-up" data-aos-delay="100"><FontAwesomeIcon icon={faCheck} />{item}</li>
              ))}
            </ul>
            <LinkContainer to={'/team'}>
              <NavLink>
            <CustomButton title={"Our Team"} />
              </NavLink>
            </LinkContainer>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  )
}

export default About