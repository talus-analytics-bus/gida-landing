import React from 'react'
import styled from 'styled-components'

import CMS from '@talus-analytics/library.airtable-cms'

import Providers from 'components/layout/Providers'
import Nav from 'components/layout/Nav/Nav'
import Footer from 'components/layout/Footer/Footer'

import useCitationsPageData from 'cmsHooks/useCitationsPageData'
import useCitationsData from 'cmsHooks/useCitationsData'
import Citation from 'components/citationsPage/Citation'

const Main = styled.main`
  max-width: 700px;
  margin: auto;
  margin-top: 50px;
`
const H1 = styled.h1`
  color: #00408d;
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
        {filteredCitations.map(citation => (
          <Citation {...{ citation }} />
        ))}
      </Main>
      <Footer />
    </Providers>
  )
}

export default CitationsPage
