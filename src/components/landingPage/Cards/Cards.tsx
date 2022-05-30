import useProjectsData from 'cmsHooks/useProjectsData'
import React from 'react'
import Card from './Card'

const Cards = () => {
  const projects = useProjectsData()

  const sortedProjects = projects.nodes.sort(
    (a, b) => Number(a.data.Order) - Number(b.data.Order)
  )

  return (
    <>
      {sortedProjects.map(project => (
        <Card key={project.data.Name} project={project} />
      ))}
    </>
  )
}

export default Cards
