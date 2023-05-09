import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import CustomButton from '../../components/CustomButton'
import {bgplan,building} from '../../assets/index';
import { hero } from '../../constants';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { LinkContainer } from 'react-router-bootstrap';
import { NavLink } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'


const Hero = () => {
	const [count, setCountStart] = useState(false);

  useEffect(()=>{
    Aos.init({duration: 1800});
  },[])

  return (
    <section className='hero__sec'>
        <Container>
            <Row>
                <Col lg={6} className='brief' data-aos="fade-right">
                    <h6>{hero.subtitle}</h6>
                    <h1>{hero.heading}</h1>
                    <p>{hero.desc}</p>
                    <div className='btn__con'>
                      <LinkContainer to={"/contact"}>
                        <NavLink>
                    <CustomButton title="Consult Now"/>
                        </NavLink>
                      </LinkContainer>
                    </div>
                    <img className='w-100' src={bgplan} alt='plan' />
                </Col>
                <Col lg={6} className='stats d-flex flex-column align-items-lg-end mt-5 mt-lg-0' >
						<ScrollTrigger onEnter={()=>setCountStart(!count)} onExit={()=>setCountStart(!count)}>
                  
                  <div className='text-lg-end' data-aos="fade-left">
                    <p>
                      <span>
                        {
                          count && <CountUp end={hero.projects} suffix='+'/>
                        }
                        
                      </span>
                      Projects/Year
                    </p>
                  </div>
                  <div className='text-lg-end' data-aos="fade-left">
                    <p>
                      <span>
                        {
                          count &&  <CountUp start={0} end={hero.trunover} decimal='.' decimals={3}  />
                        }
                        
                      </span>Million euros<br /> trunover in 2022
                    </p>
                  </div>
                  </ScrollTrigger>
                  <div data-aos="fade-up">

                  <img  src={building} alt='building' />
                  </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Hero