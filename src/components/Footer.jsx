import React from 'react';
import { logo } from '../assets';
import Contact from '../pages/contact/Contact';
import { Button, Col, Container, NavLink, Row } from 'react-bootstrap';
import { contact, navLinks } from '../constants';
import { faEnvelope, faLocationDot, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LinkContainer } from 'react-router-bootstrap';

const Footer = () => {

	return (
		<section className="py-5 footer__sec">
			<Container className="pt-4">
				<Row className='footer__top pb-4'>
					<Col lg={3} className="">
						<div className="logo__con">
							<div className="logo d-flex align-items-center gap-2 mb-4">
								<img src={logo} alt="axial Construct" />
								<p>
									Axial <span>Construct</span>
								</p>
							</div>
							<p>
								Libero volutpat sed cras ornare arcu dui vivamus. Ac tortor dignissim convallis aenean
								et tortor at risus viverra
							</p>
						</div>
					</Col>
					<Col lg={3} className=" mt-5 mt-lg-0">
						<div>
							<h2 className="mb-4">Contact</h2>
							<div>
								<div className="d-flex align-items-center pb-3">
									<FontAwesomeIcon icon={faPhone} />
									<div>{contact.phone.map((number, index) => <p key={index}>{number}</p>)}</div>
								</div>
								<div className="d-flex align-items-center pb-3">
									<FontAwesomeIcon icon={faEnvelope} />
									<div>{contact.email.map((mail, index) => <p key={index}>{mail}</p>)}</div>
								</div>
								<div className="d-flex align-items-center pb-3">
									<FontAwesomeIcon icon={faLocationDot} />
									<p>{contact.address}</p>
								</div>
							</div>
						</div>
					</Col>
					<Col lg={2} className="footer__menu mt-5 mt-lg-0">
						<h2 className="mb-4">Company</h2>
						<ul>
							{navLinks.map((nav, index) => (
								<li key={index} className="pb-3">
                                    <LinkContainer to={ index === 0 ? `/` : `/${nav.id}`}>
									<NavLink>{nav.title}</NavLink>
                                    </LinkContainer>
								</li>
							))}
						</ul>
					</Col>
					<Col lg={4} className=' mt-5 mt-lg-0'>
						<h2 className="mb-4">Subscribe to Our News</h2>
						<p className='mb-4'>Find out about the last days and the latest promotions of our Corporation</p>
						<div className="input-group">
							<input
								type="email"
								className="input"
								id="Email"
								name="Email"
								placeholder="Email"
								autoComplete="off"
							/>
							<Button>
								<FontAwesomeIcon icon={faPaperPlane} />
							</Button>
						</div>
					</Col>
				</Row>
                <Row className='pt-4 footer__bottom' >
                    <Col lg={6} className='pt-4'>
                        <p>Merkulove © Axial Construct Template<br /> All rights reserved Copyrights 2023</p>
                    </Col>
                    <Col lg={6} className='d-flex justify-content-lg-end justify-content-start align-items-center mt-4 mt-lg-0'>
                        <ul className='d-flex gap-4'>
                            <li><i className="fa fa-facebook"></i></li>
                            <li><i className="fa fa-instagram" aria-hidden="true"></i></li>
                            <li><i className="fa fa-twitter"></i></li>
                            <li><i className="fa fa-linkedin"></i></li>
                        </ul>
                    </Col>
                </Row>
			</Container>
		</section>
	);
};

export default Footer;
