import { useStaticQuery, graphql } from 'gatsby'

import { AirtableCMSData } from '@talus-analytics/library.airtable-cms'

const usePrivacyPageData = () => {
  const { cmsPrivacyPageContent }: { cmsPrivacyPageContent: AirtableCMSData } =
    useStaticQuery(graphql`
      {
        cmsPrivacyPageContent: allAirtable(
          filter: { table: { eq: "Privacy Policy Page" } }
        ) {
          nodes {
            data {
              Name
              Text
            }
          }
        }
      }
    `)

  return cmsPrivacyPageContent
}

export default usePrivacyPageData
