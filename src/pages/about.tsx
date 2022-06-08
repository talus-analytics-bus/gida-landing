import React from 'react'
import Providers from 'components/layout/Providers'
import Nav from 'components/layout/Nav/Nav'

import CMS from '@talus-analytics/library.airtable-cms'

import useAboutPageData from 'cmsHooks/useAboutPageData'
import Footer from 'components/layout/Footer/Footer'

const AboutPage = () => {
  const aboutPageData = useAboutPageData()

  return (
    <Providers>
      <Nav />
      <div className="about">
        <div className="content">
          <h1>
            <CMS.Text name="H1" data={aboutPageData} />
          </h1>
          <p></p>
          <CMS.RichText name="Main content" data={aboutPageData} />
        </div>
      </div>
      <Footer />
    </Providers>
  )
}

export default AboutPage
