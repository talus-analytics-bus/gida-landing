import React from 'react'
import { ProjectData } from 'cmsHooks/useProjectsData'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
// import useProjectLogosData from 'cmsHooks/useProjectLogosData'
import CMS from '@talus-analytics/library.airtable-cms'

interface CardProps {
  project: {
    data: ProjectData
  }
}

const Card = ({ project }: CardProps) => {
  const image = getImage(project.data.Image.localFiles[0].childImageSharp)!

  // const logoData = useProjectLogosData()

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
          {/* <CMS.Image
            name={project.data.Logo_Name[0].data.Name}
            data={logoData}
            // imgClassName="card-logo"
            imgStyle={{
              objectFit: 'contain',
              objectPosition: 'left center',
            }}
            style={{ height: 80, objectFit: 'contain' }}
          /> */}
          <CMS.Icon name={project.data.Logo} color="red" />
        </div>
        <div
          className="content"
          dangerouslySetInnerHTML={{
            __html: project.data.Description,
          }}
        />
        <div
          className="buttons"
          dangerouslySetInnerHTML={{
            __html: project.data.Buttons_and_Links,
          }}
        />
      </div>
    </div>
  )
}

export default Card
