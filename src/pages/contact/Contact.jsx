import React, { useState } from 'react';
import PathBan from '../../components/PathBan';
import { Col, Container, Form, Row } from 'react-bootstrap';
import BigHeading from '../../components/BigHeading';
import CustomButton from '../../components/CustomButton';
import Details from '../../components/Details';
import { NavLink } from 'react-router-dom';

const Contact = () => {
	const [mail, setMail] = useState({
    fullname: '',
    phone: '',
    email: '',
    msg: '',
    subject: ''
  });

  const handleInputChange = (event) => {
    setMail({...mail,[event.target.name]: event.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { fullname, phone, email, msg, subject } = mail;

    if (!fullname || !email || !msg) {
      alert('Please fill in all required fields.');
      return;
    }

    const recipient = 'someone@email.com';
    const body = encodeURIComponent(`Name: ${fullname}\nPhone: ${phone}\nMessage: ${msg}`);
    window.open(`mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${body}`);
  };
 
	return (
		<section className="contact__sec">
			<div>
				<PathBan title={'build relationships'} heading={'Get in Touch Real Quick'} />
			</div>
			<Container className="py-5">
				<Row>
					<Col lg={8}>
						<div>
							<BigHeading insight={'Contact Us'} highlight={'In Touch'} title={'Get'} />
							<p>
								Pellentesque sit amet porttitor eget dolor morbi non arcu. Vitae justo eget magna
								fermentum iaculis eu n
							</p>
						</div>
						<div className="py-5">
							<Form >
								<Row className="mb-3">
									<Form.Group className="mb-3 col-lg-6" controlId="formGridText1">
										<Form.Control type="text" name="fullname" placeholder="Full Name" onChange={handleInputChange} />
									</Form.Group>
									<Form.Group className="mb-lg-3 col-lg-6" controlId="formGridText2">
										<Form.Control type="text" name="phone" placeholder="Phone" onChange={handleInputChange} />
									</Form.Group>
								</Row>
								<Form.Group controlId="formGridEmail" className='mb-3'>
									<Form.Control type="email" name='email' placeholder="Email Address" onChange={handleInputChange} />
								</Form.Group>
                <Form.Group controlId="formGridText3" >
									<Form.Control type="text" name='subject' placeholder="Subject" onChange={handleInputChange} />
								</Form.Group>

								<Form.Group className="my-4" controlId="exampleForm.ControlTextarea1">
									<Form.Control as="textarea" name='msg' rows={3} placeholder="Message" onChange={handleInputChange} />
								</Form.Group>
                <NavLink onClick={handleSubmit}>
								<CustomButton title={'Send Message'} />

                </NavLink>
							</Form>
						</div>
					</Col>
					<Col lg={4} className="ps-lg-4 pt-lg-5">
						<Details />
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Contact;
