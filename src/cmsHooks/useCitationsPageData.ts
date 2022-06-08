import { useStaticQuery, graphql } from 'gatsby'

import { AirtableCMSData } from '@talus-analytics/library.airtable-cms'

const useCitationsPageData = () => {
  const {
    cmsCitationsPageContent,
  }: { cmsCitationsPageContent: AirtableCMSData } = useStaticQuery(graphql`
    {
      cmsCitationsPageContent: allAirtable(
        filter: { table: { eq: "Citations Page" } }
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

  return cmsCitationsPageContent
}

export default useCitationsPageData
