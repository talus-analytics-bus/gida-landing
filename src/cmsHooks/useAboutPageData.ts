import { useStaticQuery, graphql } from 'gatsby'

import { AirtableCMSData } from '@talus-analytics/library.airtable-cms'

const useIndexPageData = () => {
  const { cmsAboutPageContent }: { cmsAboutPageContent: AirtableCMSData } =
    useStaticQuery(graphql`
      {
        cmsAboutPageContent: allAirtable(
          filter: { table: { eq: "About Page" } }
        ) {
          nodes {
            data {
              Name
              Text
              # Image {
              #   localFiles {
              #     childImageSharp {
              #       gatsbyImageData(height: 400, placeholder: BLURRED)
              #     }
              #   }
              # }
            }
          }
        }
      }
    `)

  return cmsAboutPageContent
}

export default useIndexPageData
