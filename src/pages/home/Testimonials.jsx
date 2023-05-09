import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import { Col, Container, Row } from 'react-bootstrap';
import BigHeading from '../../components/BigHeading';
import { testimonials } from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSackDollar, faStar, faStarHalf, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faObjectUngroup } from '@fortawesome/free-regular-svg-icons';

const Star = ({reviews}) => {
    const ratingStar = Array.from({length:5},(elem,index)=>{
        let number = index + 0.5;
        return <span key={index}>
            {
                reviews 
                >= 
                index + 1 
                ?
                <FontAwesomeIcon icon={faStar} /> 
                :
                reviews 
                >= 
                number 
                ? 
                <FontAwesomeIcon icon={faStarHalfStroke} /> 
                : 
                <FontAwesomeIcon className='outline' icon={faObjectUngroup} />
            }
        </span>
    })
    return (
        <div className='rating'>{ratingStar}</div>
    )
}

const Testimonials = () => {
	return (
		<section className="testimonials__sec py-5">
			<Container>
				<div className='py-5'>
					<Swiper
						slidesPerView={2}
						spaceBetween={60}
						navigation={true}
                        breakpoints={{
                            0:{
                                slidesPerView: 1,
                            },
                            991:{
                                slidesPerView: 2
                            }
                        }}
						modules={[ Navigation ]}
						className="mySwiper"
					>
                        <div>
				        <BigHeading insight={'Our Reviews'} title={'What Our'} highlight={'Clients Says'} />
                        </div>
                        {
                            testimonials && testimonials.map((item,index)=>(
                                <SwiperSlide key={index}>
                                    <div className='car__con p-5'>
                                        <Star reviews={item.rating}/>
                                        <p className='mb-4'>
                                    {item.desc}
                                        </p>
                                        <div className='profile d-flex align-items-center gap-4'>
                                            <img  src={item.img} alt='profile' />
                                            <div>
                                                <h6>{item.name}</h6>
                                                <p>{item.title}</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
						
					</Swiper>
				</div>
			</Container>
		</section>
	);
};

export default Testimonials;
