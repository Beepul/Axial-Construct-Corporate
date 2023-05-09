import React from 'react';
import { useParams } from 'react-router-dom';
import { services } from '../../constants';
import PhotoBan from '../../components/PhotoBan';
import { Col, Container, ListGroup, Nav, Row, Tab } from 'react-bootstrap';
import BigHeading from '../../components/BigHeading';

const SingleService = () => {
	const { id } = useParams();

	const service = services.find((item) => item.id == id);

	return (
		<section className="single__sec">
			<PhotoBan data={service} title={'We Provide Best Service'} />
			<Container className="py-5">
				<Row className="align-items-center">
					<Col lg={6}>
						<BigHeading
							insight={'Axial Custruct Sercives'}
							title={'We Provide'}
							highlight={service.title}
						/>
					</Col>
					<Col lg={6} className="text-lg-end" data-aos="fade-left">
						<p>{service.description}</p>
					</Col>
				</Row>
        <section className='py-5'>
				<Tab.Container id="left-tabs-example" defaultActiveKey="cat1">
					<Row>
						<Col lg={4}>
							<Nav variant="pills" className="flex-column mb-5 mb-lg-0">
								{service.category.map((item, index) => (
									<Nav.Item >
										<Nav.Link className='py-4' eventKey={`${item.id}`} key={index}>
											{item.title}
										</Nav.Link>
									</Nav.Item>
								))}
							</Nav>
						</Col>
						<Col lg={8} className='right__sec'>
							<Tab.Content>
								{service.category.map((item, index) => (
									<Tab.Pane eventKey={`${item.id}`} key={index}>
										<div className='img__con mb-4'>
                      <img className='w-100' src={item.thumbnail} alt={item.title} />
                    </div>
                    <div className='text__con'>
                      {item.desc.map((descript,i)=>(
                        <p key={i} className='mb-4'>{descript}</p>
                      ))}
                      {item.process 
                      ? 
                      <div>
                        <h2 className='mb-3'>{item.process.title} :</h2>
                        <p className='mb-3'>{item.process.desc}</p>
                        <ul>
                          {item.process.steps.map((step)=>(
                            <li className='mb-4'>
                              <div className='d-flex gap-3 mb-2'>
                              <h5>0{step.id})</h5>
                              <h5>{step.name} :</h5>
                              </div>
                              <p>{step.desc}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                      :
                      ''}
                    </div>
									</Tab.Pane>
								))}
							</Tab.Content>
						</Col>
					</Row>
				</Tab.Container>
        </section>
			</Container>
		</section>
	);
};

export default SingleService;
