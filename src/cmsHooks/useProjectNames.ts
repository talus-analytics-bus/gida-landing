import { useStaticQuery, graphql } from 'gatsby'

export interface ProjectNames {
  distinct: string[]
}

const useProjectNames = () => {
  const { projectNames }: { projectNames: ProjectNames } =
    useStaticQuery(graphql`
      {
        projectNames: allAirtable(filter: { table: { eq: "Citations" } }) {
          distinct(field: data___Project___data___Name)
        }
      }
    `)

  return projectNames
}

export default useProjectNames
