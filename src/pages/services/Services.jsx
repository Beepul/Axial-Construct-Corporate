import React from 'react'
import Solutions from '../home/Solutions'
import PathBan from '../../components/PathBan'
import { useLocation } from 'react-router-dom'

const Services = () => {

  return (
    <section>
      <div>
        <PathBan title={"Building communities"} heading={"We Provide Best Solutions"} />
      </div>
      <Solutions />
    </section>
  )
}

export default Services