import React from 'react';
import { Accordion, Col, Container, NavLink, Row } from 'react-bootstrap';
import BigHeading from '../../components/BigHeading';
import CustomButton from '../../components/CustomButton';
import { questions } from '../../constants';
import { LinkContainer } from 'react-router-bootstrap';

const Faq = () => {
	return (
		<section className="pt-5 faq__sec">
			<Container className='pt-5'>
				<Row>
					<Col lg={6}>
						<BigHeading
							insight={'dealing with your worries'}
							title={'If Your Questions Is Not Here'}
							highlight={'Contact Us'}
						/>
						<div className='pt-4 mb-5 mb-lg-0'>
							<p className='text'>
								Porttitor rhoncus dolor purus non enim praesent elementum facilisis. Nisi scelerisque eu
								ultrices vitae auctor eu augue ut lectus
							</p>
							<LinkContainer to={'/contact'}>
								<NavLink>
							<CustomButton title={'Contact Us'} />
								</NavLink>
							</LinkContainer>
						</div>
					</Col>
					<Col lg={6}>
						<Accordion defaultActiveKey="0">
                            {questions && questions.map((question,index) => (
							<Accordion.Item eventKey={`${index}`} key={question.id}>
								<Accordion.Header>{question.question}</Accordion.Header>
								<Accordion.Body>
									{question.answer}
								</Accordion.Body>
							</Accordion.Item>
                            ))}
							
						</Accordion>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Faq;
