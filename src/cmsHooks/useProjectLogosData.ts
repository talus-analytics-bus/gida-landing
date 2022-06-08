import { useStaticQuery, graphql } from 'gatsby'

import { AirtableCMSData } from '@talus-analytics/library.airtable-cms'

const useProjectLogosData = () => {
  const { cmsProjectLogosData }: { cmsProjectLogosData: AirtableCMSData } =
    useStaticQuery(graphql`
      {
        cmsProjectLogosData: allAirtable(
          filter: { table: { eq: "Project Logos" } }
        ) {
          nodes {
            data {
              Name
              Text
              Image {
                localFiles {
                  childImageSharp {
                    gatsbyImageData(height: 80, placeholder: BLURRED)
                  }
                }
              }
            }
          }
        }
      }
    `)

  return cmsProjectLogosData
}

export default useProjectLogosData
