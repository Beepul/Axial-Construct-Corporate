import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const PhotoBan = ({ data, title }) => {
	const { pathname } = useLocation();

	const segments = pathname.split('/');
	const label = segments[1].slice(0, -1).charAt(0).toUpperCase() + segments[1].slice(0, -1).slice(1).toLowerCase();

	console.log(label);
	return (
		<section
			className="photo__ban__sec"
			style={{
				backgroundImage: `url(${data.thumbnail})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat'
			}}
		>
			<div className="overlay" />
			<Container className="ban__con d-flex flex-column justify-content-center gap-2">
				<p data-aos="fade-right" data-aos-duration="1000">{title}</p>
				<h1 data-aos="fade-right" data-aos-duration="1500">{data.title}</h1>
				<p className="d-flex align-items-center gap-4" data-aos="fade-right" data-aos-duration="2000">
					Home <FontAwesomeIcon icon={faMinus} />Single {label}
				</p>
			</Container>
		</section>
	);
};

export default PhotoBan;
