import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../../constants';
import PhotoBan from '../../components/PhotoBan';
import { Col, Container, Row } from 'react-bootstrap';
import Testimonials from '../home/Testimonials';
import Faq from '../home/Faq';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation,Autoplay } from 'swiper';
import BigHeading from '../../components/BigHeading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Details from '../../components/Details';

const SingleProject = () => {
	const { id } = useParams();
    const list = ['Building the future with ideas','Designing future with excellence','Discovering possibility in concrete','Engineering the better way']

	const singleProject = projects.find((project) => project.id == id);

	return (
		<section className="single__project__sec">
			<PhotoBan data={singleProject} title={'What We Do'} />
			<Container className="py-5">
				<div className='upper__text d-flex  align-items-center'>
                    <div>
					<BigHeading insight={'One Of our work'} title={'Project'} highlight={singleProject.title} />
                    </div>
                    <p className='text-end d-none d-lg-block'>Get innovative strategies to develop and implement robust solutions to improve the facility and manage mechanically rigorous challenges.</p>
				</div>
                <Row>
                    <Col lg={8}>
				<div className="pt-5 mb-5 slider__one">
					<Swiper
						slidesPerView={1}
						spaceBetween={60}
						navigation={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                          }}
						modules={[ Navigation,Autoplay ]}
						className="mySwiper"
					>
						{singleProject.images &&
							singleProject.images.map((item, index) => (
								<SwiperSlide key={index}>
									<div className='img__con'>
										<img className="w-100" src={item} alt="images" />
									</div>
								</SwiperSlide>
							))}
					</Swiper>
				</div>
                <div>
                    <h3 className='mb-4'>Description</h3>
                    <p className='mb-4'>{singleProject.description}</p>
                    <h3 className='mb-4'>Building better development</h3>
                    <p className='mb-4'>Aenean sed adipiscing diam donec adipiscing tristique risus. Nunc pulvinar sapien et ligula ullamcorper malesuada. Venenatis urna cursus eget nunc scelerisque viverra mauris in. A cras semper auctor neque vitae tempus.</p>
                    <ul className='desc__list'>
                        {list.map((item,index)=>(
                            <li key={index}><FontAwesomeIcon icon={faCheck} />{item}</li>
                        ))}
                    </ul>
                </div>
                    </Col>
                    <Col lg={4} className='py-5'>
                        <div className='project__info p-lg-5 p-3 mb-5'>
                            <h4 className='mb-4'>Information About The Project</h4>
                            <ul className='list'>
                                <li className='d-flex justify-content-between'><p>Location</p><p>{singleProject.details.location}</p></li>
                                <li className='d-flex justify-content-between'><p>Sector</p><p>{singleProject.details.sector}</p></li>
                                <li className='d-flex justify-content-between'><p>Technology</p><p>{singleProject.details.technology}</p></li>
                                <li className='d-flex justify-content-between'><p>Scope Of Work</p><p>{singleProject.details.scope}</p></li>
                                <li className='d-flex justify-content-between'><p>Completion Date</p><p>{singleProject.details.completion}</p></li>
                            </ul>
                        </div>
                        <div>
                            <Details />
                        </div>
                    </Col>
                </Row>
			</Container>
			<Faq />
			<Testimonials />
		</section>
	);
};

export default SingleProject;
