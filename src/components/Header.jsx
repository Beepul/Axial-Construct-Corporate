import React, { useEffect, useState } from 'react';
import { logo } from '../assets/index';
import { Col, Container, NavLink, Offcanvas, Row } from 'react-bootstrap';
import { navLinks } from '../constants/index';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
	const [ scrollData, setScrollData ] = useState({
		y: 0,
		lastY: 0
	});
	const [ hideNav, setHideNav ] = useState(false);
  const [show, setShow] = useState(false);


  const handleBar = () => {
    setShow(!show)
  }


	useEffect(() => {
		const handleScroll = () => {
			setScrollData((prevState) => {
				return {
					y: window.scrollY,
					lastY: prevState.y
				};
			});
		};
		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	useEffect(
		() => {
			if (scrollData.y > 500) {
				setHideNav(true);
			} else {
				setHideNav(false);
			}

			if (scrollData.lastY < scrollData.y) {
				setHideNav(true);
			} else {
				setHideNav(false);
			}
		},
		[ scrollData ]
	);

	return (
		<header className={hideNav ? 'header hideNav' : 'header'}>
			<Container>
				<Row className={scrollData.y === 0 ? 'py-5' : 'py-3'}>
					<Col className='col-10'>
						<LinkContainer to="/">
							<div className="logo__con d-flex align-items-center gap-3">
								<img src={logo} alt="axial construct" />
								<h2 className="d-flex gap-2">
									Axial <span>Construct</span>
								</h2>
							</div>
						</LinkContainer>
					</Col>
					<Col  className="col-2 text-lg-start d-lg-block d-flex justify-content-end">
						<ul className="nav__link d-lg-flex d-none justify-content-end text-uppercase">
							{navLinks &&
								navLinks.map((link, index) => (
									<li id={link.id} key={index} >
										<LinkContainer to={index === 0 ? `/` : `/${link.id}`}>
											<NavLink>{link.title}</NavLink>
										</LinkContainer>
									</li>
								))}
						</ul>
						<a className="bars d-flex flex-column justify-content-between align-items-end d-lg-none " onClick={handleBar}>
							<div className={`bar ${show ? 'full__bar' : "short__bar "}`}></div>
							<div className='bar'></div>
							<div className={`bar ${show ? 'full__bar' : "short__bar "}`}></div>
							<div className='bar '></div>
						</a>
						<Offcanvas show={show} placement='top' style={{top: scrollData.y === 0 ? 124 : 60}}>
        <Offcanvas.Body>
          <Container>
          <ul className="bar__menu text-uppercase">
							{navLinks &&
								navLinks.map((link, index) => (
									<li id={link.id} key={index} className='mb-4'  onClick={handleBar} >
										<LinkContainer to={index === 0 ? `/` : `/${link.id}`}>
											<NavLink>{link.title}</NavLink>
										</LinkContainer>
									</li>
								))}
						</ul>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
					</Col>
				</Row>
			</Container>
		</header>
	);
};

export default Header;
