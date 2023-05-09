import React, { useRef, useState } from 'react';
import { Col, Container, NavLink, Row } from 'react-bootstrap';
import BigHeading from '../../components/BigHeading';
import CustomButton from '../../components/CustomButton';
import { faCheck, faPause, faPlay, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LinkContainer } from 'react-router-bootstrap';

const Team = () => {
    const videoRef = useRef(null);
    const [isplaying,setIsPlaying] = useState(false);

    const list = ["Building the future with ideas","Designing future with excellence","Discovering possibility concrete"]


      const handlePlayPause = () => {
        if (isplaying) {
          videoRef.current.pause();
        } else {
          videoRef.current.play();
        }
        setIsPlaying(!isplaying);
      };
	return (
		<section className="team__sec py-5">
			<Container>
				<div className="d-lg-flex justify-content-between align-items-center">
                    <div data-aos="fade-right">
					<BigHeading
						insight={'truth in engineering'}
						title={'Constrution of your Idea is Responsible of'}
						highlight={'Our Team'}
                        color={"#fff"}
					/>
                    </div>
                    <LinkContainer to={'/team'}>
                    <NavLink data-aos="fade-left">
					<CustomButton title={'Our Team'} />
                    </NavLink>
                    </LinkContainer>
				</div>
				<div className="py-5 video__con" data-aos="zoom-in-up">
					<video preload='auto' ref={videoRef}  
                     muted poster='https://html.merku.love/axial/img/video/01.webp'>
						<source src="https://html.merku.love/axial/video/full.mp4" type="video/mp4" />
					</video>
                    <div className='control' onClick={handlePlayPause}>
                      {isplaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
                    </div>
				</div>
                <Row>
                <Col lg={6} className='left__text'>
                    <div>
                        <p data-aos="fade-right">Leo in vitae turpis massa sed elementum tempus egestas sed. Sed sed risus pretium quam vulputate dignissim suspendisse in. Placerat orci nulla pellentesque dignissim enim. Tortor pretium viverra suspendisse potenti nullam augue. Vestibulum lorem sed risus ultricies tristique nulla. Erat velit scelerisque in dictum non consectetur.</p>
                        <ul>
                            {list.map((item,index)=>(
                                <li key={index} data-aos="fade-up" data-aos-delay="50"><FontAwesomeIcon icon={faCheck} />{item}</li>
                            ))}
                        </ul>
                    </div>
                </Col>
                <Col lg={6} className='mt-4 mt-lg-0'>
                    <div className='right__text' data-aos="fade-left">
                        <h5>Senectus et netus et malesuada. Nunc proin pulvinar sapien et ligula ulamcorper malesuada proin</h5>
                        <div >
                            <div className='profile d-flex align-items-center justify-content-between'>
                                <div className='d-flex align-items-center gap-4'>
                                <img className='d-sm-block d-none' src='https://html.merku.love/axial/img/avatars/founder.webp' alt='profile' />
                                <div >
                                <p>Daniel Strickland</p>
                                <h6>Founder of the company</h6>
                                </div>

                                </div>
                                <FontAwesomeIcon icon={faQuoteRight} className='d-sm-block d-none'/>
                            </div>
                        </div>
                    </div>
                </Col>
                </Row>
			</Container>
		</section>
	);
};

export default Team;
