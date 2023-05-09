import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Projects from './pages/projects/Projects';
import Services from './pages/services/Services';
import Header from './components/Header';
import Footer from './components/Footer';
import SingleService from './pages/singleService/SingleService';
import SingleProject from './pages/singleProject/SingleProject';
import ScrollToTop from './components/ScrollToTop';
import OurTeam from './pages/team/OurTeam';
import Loading from './components/Loading';


const App = () => {
  const [loading, setLoading] = useState(false);

	useEffect(()=>{
		setLoading(true);
		const timeout = setTimeout(()=>{
			setLoading(false);
		},2000);
		return () => clearTimeout(timeout)
	},[])
  return (
    <>
    { loading ? <Loading /> : 
    <BrowserRouter>
    <div className='app'>
    <Header />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
        <Route path='/services/:id' element={<SingleService />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/:id' element={<SingleProject />} />
        <Route path='/team' element={<OurTeam />} />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
    }
    </>
  )
}

export default App