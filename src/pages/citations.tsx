import React from 'react'
import styled from 'styled-components'

import CMS from '@talus-analytics/library.airtable-cms'

import Providers from 'components/layout/Providers'
import Nav from 'components/layout/Nav/Nav'
import Footer from 'components/layout/Footer/Footer'
import Main from 'components/layout/Main'

import useCitationsPageData from 'cmsHooks/useCitationsPageData'

const H1 = styled.h1`
  color: #00408d;
`
const Intro = styled(CMS.RichText)``

const CitationsPage = () => {
  const citationsCMSData = useCitationsPageData()

  return (
    <Providers>
      <CMS.SEO title="Citations" />
      <Nav />
      <Main>
        <H1>
          <CMS.Text name="H1" data={citationsCMSData} />
        </H1>
        <Intro name="Intro text" data={citationsCMSData} />
      </Main>
      <Footer />
    </Providers>
  )
}

export default CitationsPage
