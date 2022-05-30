import CMS from '@talus-analytics/library.airtable-cms'
import Contact from 'components/Contact/Contact'
import Footer from 'components/layout/Footer/Footer'
import HomepageNav from 'components/layout/Nav/HomepageNav'
import Providers from 'components/layout/Providers'
import React from 'react'

const ContactPage = () => (
  <Providers>
    <CMS.SEO />
    <HomepageNav />
    <Contact />
    <Footer />
  </Providers>
)

export default ContactPage
