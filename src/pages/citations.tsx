import React from 'react'
import styled from 'styled-components'

import CMS from '@talus-analytics/library.airtable-cms'
import Typeahead from '@talus-analytics/library.ui.typeahead'

import Providers from 'components/layout/Providers'
import Nav from 'components/layout/Nav/Nav'
import Footer from 'components/layout/Footer/Footer'
import Citation from 'components/citationsPage/Citation'

import useCitationsPageData from 'cmsHooks/useCitationsPageData'
import useCitationsData from 'cmsHooks/useCitationsData'
import useProjectNames from 'cmsHooks/useProjectNames'

const Main = styled.main`
  max-width: 700px;
  margin: auto;
  margin-top: 50px;
`
const H1 = styled.h1`
  color: #00408d;
`
const H2 = styled.h2`
  margin-top: 40px;
  font-family: 'Rawline';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #303434;
  padding-bottom: 5px;
  border-bottom: 1px solid #d6d8db;
`
const Intro = styled(CMS.RichText)`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #303434;
`
const FilterContainer = styled.div`
  margin-top: 30px;
`

const CitationsPage = () => {
  const citationsPageData = useCitationsPageData()
  const citationsData = useCitationsData()
  const projectNames = useProjectNames()

  const nameFilters = projectNames.distinct.map(name => ({
    key: name,
    label: name,
  }))

  const [selectedFilters, setSelectedFilters] = React.useState<
    typeof nameFilters
  >([])

  const selectedKeys = selectedFilters.map(i => i.key)
  const unselectedFilters = nameFilters.filter(
    i => !selectedKeys.includes(i.key)
  )

  const activeFilterNames = selectedFilters.map(f => f.label)
  const citations = citationsData.nodes.map(node => node.data)
  const filteredCitations =
    activeFilterNames.length === 0
      ? citations
      : citations.filter(citation =>
          activeFilterNames.includes(citation.Project[0].data.Name)
        )

  const toolCitations = filteredCitations
    .filter(citation => citation.Citation_type === 'Tool')
    .sort((a, b) => a.Authors.localeCompare(b.Authors))
  const paperCitations = filteredCitations
    .filter(citation => citation.Citation_type === 'Paper')
    .sort((a, b) => a.Authors.localeCompare(b.Authors))

  const placeholder =
    selectedFilters.length === 0
      ? 'Select projects'
      : selectedFilters
          .map(f => f.label)
          .slice(0, 3)
          .join(', ')

  return (
    <Providers>
      <CMS.SEO title="Citations" />
      <Nav />
      <Main>
        <H1>
          <CMS.Text name="H1" data={citationsPageData} />
        </H1>
        <Intro name="Intro text" data={citationsPageData} />
        <FilterContainer>
          <CMS.Text name="Filter bar label" data={citationsPageData} />
          <Typeahead
            multiselect
            values={selectedFilters}
            items={unselectedFilters}
            onAdd={item => setSelectedFilters(prev => [...prev, item])}
            onRemove={item =>
              setSelectedFilters(prev => prev.filter(i => i.key !== item.key))
            }
            placeholder={placeholder}
          />
        </FilterContainer>
        {toolCitations.length > 0 && (
          <>
            <H2>
              <CMS.Text name="Idea citations header" data={citationsPageData} />
            </H2>
            {toolCitations.map(citation => (
              <Citation key={citation.Publication_Title} {...{ citation }} />
            ))}
          </>
        )}
        {paperCitations.length > 0 && (
          <>
            <H2>
              <CMS.Text
                name="Publication citations header"
                data={citationsPageData}
              />
            </H2>
            {paperCitations.map(citation => (
              <Citation key={citation.Publication_Title} {...{ citation }} />
            ))}
          </>
        )}
      </Main>
      <Footer />
    </Providers>
  )
}

export default CitationsPage
