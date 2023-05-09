import React from 'react'
import PathBan from '../../components/PathBan'
import Works from '../home/Works'
import { projects } from '../../constants'

const Projects = () => {
  return (
    <section>
      <div>
        <PathBan title={"Fresh Project Renovation"} heading={"Top Works Of Ours"} />
      </div>
      <div>
        <Works projects={projects} color="#fff"/>
      </div>
    </section>
  )
}

export default Projects