import { useStaticQuery, graphql } from 'gatsby'

export interface ProjectNames {
  distinct: string[]
}

const useProjectNames = () => {
  const { projectNames }: { projectNames: ProjectNames } =
    useStaticQuery(graphql`
      {
        projectNames: allAirtable(filter: { table: { eq: "Projects" } }) {
          distinct(field: data___Name)
        }
      }
    `)

  return projectNames
}

export default useProjectNames
