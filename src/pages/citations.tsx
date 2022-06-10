import React from 'react'
import styled from 'styled-components'

import CMS from '@talus-analytics/library.airtable-cms'

import Providers from 'components/layout/Providers'
import Nav from 'components/layout/Nav/Nav'
import Footer from 'components/layout/Footer/Footer'
import Citation from 'components/citationsPage/Citation'

import useCitationsPageData from 'cmsHooks/useCitationsPageData'
import useCitationsData from 'cmsHooks/useCitationsData'

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

  const filteredCitations = citationsData.nodes.map(node => node.data)

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
          <p>filter bar here</p>
        </FilterContainer>
        <H2>
          <CMS.Text name="Idea citations header" data={citationsPageData} />
        </H2>
        {filteredCitations.map(
          citation =>
            citation.Citation_type === 'Tool' && <Citation {...{ citation }} />
        )}
        <H2>
          <CMS.Text
            name="Publication citations header"
            data={citationsPageData}
          />
        </H2>
        {filteredCitations.map(
          citation =>
            citation.Citation_type === 'Paper' && <Citation {...{ citation }} />
        )}
      </Main>
      <Footer />
    </Providers>
  )
}

export default CitationsPage
