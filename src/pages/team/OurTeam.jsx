import React from 'react'
import PathBan from '../../components/PathBan';
import { Col, Container, Row } from 'react-bootstrap';
import { team } from '../../constants';

const OurTeam = () => {
  return (
    <section className='our__team__sec'>
      <PathBan title={"Better than others"} heading={"Axial's Professionals"}/>
      <Container className='py-5'>
        <Row>
          { team && team.map((member,index)=>(
            <Col lg={4} key={member.id} className='my-4' data-aos="fade-up" data-aos-delay={`${index * 100 + 100}`}>
              <div className='team__con'>
                <div className='img__con'>
                  <img className='w-100 h-100' src={member.img} alt={member.name} />
                </div>
                <div className='text__con p-4'>
                  <h4 className='mb-2'>{member.name}</h4>
                  <h5 className='mb-3'>{member.title}</h5>
                  <p className='mb-4'>{member.desc}</p>
                <div className='icons'>
              <ul className='d-flex gap-4 align-items-center'>
                            <li><i className="fa fa-facebook"></i></li>
                            <li><i className="fa fa-instagram" aria-hidden="true"></i></li>
                            <li><i className="fa fa-twitter"></i></li>
                            <li><i className="fa fa-linkedin"></i></li>
                        </ul>
              </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default OurTeam