import { useStaticQuery, graphql } from 'gatsby'

export interface Citation {
  Publication_Title: string
  Authors: string
  Publication_Year: number
  Publication_Date: string
  Publication: string
  Citation_type: string
  URL: string
  DOI: string
  Project: {
    data: {
      Name: string
      Key_Color: string
      Icon: {
        data: {
          Name: string
        }
      }[]
    }
  }[]
}

export interface CitationsDataQuery {
  nodes: {
    data: Citation
  }[]
}

const useCitationsData = () => {
  const { citationsData }: { citationsData: CitationsDataQuery } =
    useStaticQuery(graphql`
      {
        citationsData: allAirtable(filter: { table: { eq: "Citations" } }) {
          nodes {
            data {
              Publication_Title
              Authors
              Publication_Year
              Publication_Date
              Publication
              URL
              DOI
              Citation_type
              Project {
                data {
                  Name
                  Key_Color
                  Icon {
                    data {
                      Name
                    }
                  }
                }
              }
            }
          }
        }
      }
    `)

  return citationsData
}

export default useCitationsData
