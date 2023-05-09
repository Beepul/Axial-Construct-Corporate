import React from 'react'
import Header from '../../components/Header'
import Hero from './Hero'
import Solutions from './Solutions'
import Works from './Works'
import Location from './Location'
import ChooseUs from './ChooseUs'
import Team from './Team'
import Faq from './Faq'
import Testimonials from './Testimonials'
import { projects } from '../../constants'



const Home = () => {
  const project = projects.slice(0,4);

  return (
    <div>
      <Hero />
      <Solutions />
      <Works projects={project} color={"#001f3f"}/>
      <Location />
      <ChooseUs />
      <Team />
      <Faq />
      <Testimonials />
    </div>
  )
}

export default Home