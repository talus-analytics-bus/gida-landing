import React from 'react'

import './Footer.scss'

const Footer = () => (
  <div className="footer home">
    <div className="content">
      <a target="_blank" href="https://ghssidea.org">
        <img
          src="assets/logo-title.png"
          alt="International Disease and Events Analysis"
        />
      </a>
      <a target="_blank" href="https://ghss.georgetown.edu/">
        <img
          src="assets/logo-georgetown.png"
          alt="Georgetown University Center for Global Health Science and Security"
        />
      </a>
      <a
        target="_blank"
        href="http://talusanalytics.com/"
        className="talus-logo"
      >
        <img src="assets/logo-talus.png" alt="Talus Analytics, LLC" />
        <div className="built-by">Built by</div>
      </a>
    </div>
  </div>
)

export default Footer
