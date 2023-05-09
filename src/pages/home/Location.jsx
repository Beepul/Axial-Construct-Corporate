import React, { useState } from 'react';
import { Col, Container, Offcanvas, Row } from 'react-bootstrap';
import BigHeading from '../../components/BigHeading';
import { map } from '../../assets';
import CustomButton from '../../components/CustomButton';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { LinkContainer } from 'react-router-bootstrap';
import { NavLink } from 'react-router-dom';

const Location = () => {
	const [ show, setShow ] = useState(false);
	const [ selected, setSelected ] = useState('');
	const [count, setCountStart] = useState(false);

	const handleShow = (id) => {
		setShow(true);
		setSelected(id);
	};

	return (
		<section className="loaction__sec py-5">
			<Container className='pt-5'>
				<Row>
					<Col lg={7}>
						<div>
							<BigHeading
								insight="Where we work"
								title="Our Projects in the"
								highlight="World"
								color="#1a1c20"
							/>
						</div>
						<div className="p-lg-5 ps-lg-0 pe-4 pe-lg-0 my-4 my-lg-0 left__con">
							<img className="w-100" src={map} alt="map" />

							<div
								className="hot__spot"
								style={{ top: '30%', left: '20%' }}
								onClick={() => handleShow('hotspot1')}
							/>

							<span
								id="hotspot1"
								className={`${show && selected === 'hotspot1' ? 'd-block' : 'd-none'}`}
								style={{ top: '28%', left: '10%' }}
								onClick={() => setShow(false)}
							>
								Fresh Concept Construction Renovation
							</span>

							<div
								className="hot__spot"
								style={{ top: '45%', left: '30%' }}
								onClick={() => handleShow('hotspot2')}
							/>
							<span
								id="hotspot2"
								className={`${show && selected === 'hotspot2' ? 'd-block' : 'd-none'}`}
								style={{ top: '43%', left: '15%' }}
								onClick={() => setShow(false)}
							>
								Food Factory Design and Construction
							</span>

							<div
								className="hot__spot"
								style={{ top: '47%', left: '56%' }}
								onClick={() => handleShow('hotspot3')}
							/>
							<span
								id="hotspot3"
								className={`${show && selected === 'hotspot3' ? 'd-block' : 'd-none'}`}
								style={{ top: '45%', left: '45%' }}
								onClick={() => setShow(false)}
							>
								Reconstruction of Old Factory
							</span>

							<div
								className="hot__spot"
								style={{ top: '75%', left: '18%' }}
								onClick={() => handleShow('hotspot4')}
							/>
							<span
								id="hotspot4"
								className={`${show && selected === 'hotspot4' ? 'd-block' : 'd-none'}`}
								style={{ top: '70%', left: '14%' }}
								onClick={() => setShow(false)}
							>
								Reconstruction of Old Factory
							</span>

							<div
								id="hotspot5"
								className="hot__spot"
								style={{ top: '68%', left: '75%' }}
								onClick={() => handleShow('hotspot5')}
							/>
							<span
								className={`${show && selected === 'hotspot5' ? 'd-block' : 'd-none'}`}
								style={{ top: '64%', left: '70%' }}
								onClick={() => setShow(false)}
							>
								Reconstruction of Old Factory
							</span>

							<div
								id="hotspot6"
								className="hot__spot"
								style={{ top: '80%', left: '60%' }}
								onClick={() => handleShow('hotspot6')}
							/>
							<span
								id="hotspot6"
								className={`${show && selected === 'hotspot6' ? 'd-block' : 'd-none'}`}
								style={{ top: '76%', left: '55%' }}
								onClick={() => setShow(false)}
							>
								Food Factory Construction
							</span>
						</div>
					</Col>
					<Col lg={5} className="text__con">
						<div className="mb-5">
							<p>
								Molestie nunc non blandit massa. Lacus sed viverra tellus in hac habitasse platea. Velit
								egestas dui id ornare arcu. Sapien pellentesque habitant morbi tristique senectus et
								netus. Ut consequat semper viverra nam libero. Convallis aenean et tortor
							</p>
						</div>
						<ScrollTrigger onEnter={()=>setCountStart(!count)} onExit={()=>setCountStart(!count)}>
						<p className='count'>
							<span>
								{
									count && <CountUp end={200} suffix='+' />
								}
							</span>Active Projects in Civil Engineering
						</p>
						<p className='count'>
							<span>
							{
									count && <CountUp end={99} suffix='%' />
								}
								
							</span>Building Control Approval Rate
						</p>
						</ScrollTrigger>
						<LinkContainer to={'/about'}>
							<NavLink>
						<CustomButton title="About Company" />

							</NavLink>
						</LinkContainer>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Location;
