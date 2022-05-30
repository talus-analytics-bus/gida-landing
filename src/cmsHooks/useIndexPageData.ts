import { useStaticQuery, graphql } from 'gatsby'

import { AirtableCMSData } from '@talus-analytics/library.airtable-cms'

const useIndexPageData = () => {
  const { cmsHomepageContent }: { cmsHomepageContent: AirtableCMSData } =
    useStaticQuery(graphql`
      {
        cmsHomepageContent: allAirtable(
          filter: { table: { eq: "Landing Page" } }
        ) {
          nodes {
            data {
              Name
              Text
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

  return cmsHomepageContent
}

export default useIndexPageData
