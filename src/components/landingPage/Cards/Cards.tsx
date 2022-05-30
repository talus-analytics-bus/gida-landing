import useProjectsData from 'cmsHooks/useProjectsData'
import React from 'react'
import Card from './Card'

const Cards = () => {
  const projects = useProjectsData()

  console.log(projects)

  return (
    <>
      {projects.nodes.map(project => (
        <Card key={project.data.Name} project={project} />
      ))}
    </>
  )
}

export default Cards
