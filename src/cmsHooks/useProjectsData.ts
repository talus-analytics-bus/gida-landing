import { useStaticQuery, graphql } from 'gatsby'
import {
  FileNode,
  IGatsbyImageDataParent,
} from 'gatsby-plugin-image/dist/src/components/hooks'
import { IGatsbyImageData } from 'gatsby-plugin-image'

export interface ProjectData {
  Name: string
  Description: string
  Buttons_and_Links: string
  Image: {
    localFiles: FileNode[] &
      { childImageSharp: IGatsbyImageDataParent<IGatsbyImageData> }[]
  }
  Link: string
  Key_Color: string
  Order: string
  Logo: {
    data: {
      Name: string
    }
  }[]
  Icon: {
    data: {
      Name: string
    }
  }[]
}

export interface ProjectsData {
  nodes: {
    data: ProjectData
  }[]
}

const useProjectsData = () => {
  const { projectsData }: { projectsData: ProjectsData } =
    useStaticQuery(graphql`
      {
        projectsData: allAirtable(filter: { table: { eq: "Projects" } }) {
          nodes {
            data {
              Name
              Description
              Buttons_and_Links
              Image {
                localFiles {
                  childImageSharp {
                    gatsbyImageData(width: 388, placeholder: BLURRED)
                  }
                }
              }
              Link
              Key_Color
              Order
              Logo {
                data {
                  Name
                }
              }
              Icon {
                data {
                  Name
                }
              }
            }
          }
        }
      }
    `)

  return projectsData
}

export default useProjectsData
