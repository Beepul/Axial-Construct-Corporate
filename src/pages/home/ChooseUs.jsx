import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { chooseUs } from '../../constants';
import BigHeading from '../../components/BigHeading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const ChooseUs = () => {
    const list = ["Building the future with ideas","Designing future with excellence","Discovering possibility concrete"]
	return (
		<section className="choose__sec py-5">
			<Container className='pt-5'>
				<Row className=''>
					<Col lg={4} className='my-4'>
						<div className='item__con'>
							<div data-aos="fade-right">

						<BigHeading
							insight="Why choose us"
							title="Design Future with"
							highlight="Excellence"
							color="#fff"
						/>
							</div>
                        <ul>
                            {list.map((item,index)=>(
                                <li key={index} data-aos="fade-up" data-aos-delay="50"><FontAwesomeIcon icon={faCheck} />{item}</li>
                            ))}
                        </ul>
						</div>
					</Col>
                    {chooseUs && chooseUs.map((item,index)=>(
                        <Col lg={4} key={index} className=' my-4 '>
							<div className='rease__con item__con p-4' data-aos="fade-up">
                            <FontAwesomeIcon icon={item.icon} />
                            <h2>{item.title}</h2>
                            <p>{item.desc}</p>    
							</div>
                        </Col>
                    ))}
				</Row>
			</Container>
		</section>
	);
};

export default ChooseUs;
