import { useStaticQuery, graphql } from 'gatsby'
import {
  FileNode,
  IGatsbyImageDataParent,
} from 'gatsby-plugin-image/dist/src/components/hooks'
import { IGatsbyImageData } from 'gatsby-plugin-image'

export interface ProjectData {
  Name: string
  Text: string
  Image: {
    localFiles: FileNode[] &
      { childImageSharp: IGatsbyImageDataParent<IGatsbyImageData> }[]
  }
  Link: string
  Logo_Name: {
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
              Text
              Link
              Logo_Name {
                data {
                  Name
                }
              }
              Image {
                localFiles {
                  childImageSharp {
                    gatsbyImageData(height: 400, placeholder: BLURRED)
                  }
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
