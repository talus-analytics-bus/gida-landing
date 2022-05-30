import React from 'react'
import { ProjectData } from 'cmsHooks/useProjectsData'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

interface CardProps {
  project: {
    data: ProjectData
  }
}

const Card = ({ project }: CardProps) => {
  const image = getImage(project.data.Image.localFiles[0].childImageSharp)!

  return (
    <div className="card">
      <div className="left-block">
        <div>
          <GatsbyImage
            imgClassName="screencap"
            image={image}
            alt={project.data.Name + ' screenshot'}
          />
        </div>
        <a className="link" target="_blank" href={project.data.Link}>
          {project.data.Link}
        </a>
      </div>
      <div className="right-block">
        <div className="logo-container">
          <img
            className="card-logo"
            src="assets/tracking.png"
            alt="Global Health Security Tracking logo"
          />
        </div>
        <div
          className="content"
          dangerouslySetInnerHTML={{
            __html: project.data.Text,
          }}
        />
      </div>
    </div>
  )
}

export default Card
