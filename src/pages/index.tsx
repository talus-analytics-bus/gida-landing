import React from 'react'

import CMS from '@talus-analytics/library.airtable-cms'
import Providers from '../components/layout/Providers'

import Main from '../components/layout/Main'

import useIndexPageData from '../cmsHooks/useIndexPageData'
import HomepageNav from 'components/layout/Nav/HomepageNav'
import Cards from 'components/landingPage/Cards/Cards'

import '../components/layout/oldStaticSiteStyles/index.scss'

const IndexPage = (): JSX.Element => {
  const data = useIndexPageData()

  return (
    <Providers>
      <CMS.SEO />
      <HomepageNav />
      <Main>
        <img
          className="hero"
          src="assets/logo-title.png"
          alt="International Disease and Events Analysis logo"
        />
        <div className="landing-text">
          <p
            className="opening-para"
            dangerouslySetInnerHTML={{
              __html: CMS.getText(data, 'Intro text'),
            }}
          ></p>
        </div>
        <div className="cards">
          <h1 className="no-top-margin">
            <CMS.Text name="H1" data={data} />
          </h1>
          <Cards />
        </div>
      </Main>
    </Providers>
  )
}

export default IndexPage
