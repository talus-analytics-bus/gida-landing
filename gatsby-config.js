// eslint-disable-next-line
module.exports = {
  siteMetadata: {
    siteUrl: 'https://example.talusanalytics.com/',
    title: 'Talus Analytics',
    cookieConsent: {
      cookieMessage:
        'Talus sites use cookies to ensure you get the best experience possible.',
      buttonColor: 'rgb(15, 35, 75)',
      backgroundColor: '#edf2f2',
    },
  },
  plugins: [
    {
      // site will not build without a valid
      // airtable api key; delete this plugin
      // if airtable isn't going to be used.
      resolve: `gatsby-source-airtable`,
      options: {
        // eslint-disable-next-line
        apiKey: process.env.AIRTABLE_API_KEY,
        concurrency: 5,
        tables: [
          {
            baseId: `appVIQlFfFn7aqzMh`,
            tableName: `Landing Page`,
            tableView: `CMS`,
            mapping: { Image: `fileNode` },
          },
          {
            baseId: `appVIQlFfFn7aqzMh`,
            tableName: `About Page`,
            tableView: `CMS`,
            // mapping: { Image: `fileNode` },
          },
          {
            baseId: `appVIQlFfFn7aqzMh`,
            tableName: `Citations Page`,
            tableView: `CMS`,
            // mapping: { Image: `fileNode` },
          },
          {
            baseId: `appVIQlFfFn7aqzMh`,
            tableName: `Site metadata`,
            tableView: `CMS`,
            mapping: { Image: `fileNode` },
          },
          {
            baseId: `appVIQlFfFn7aqzMh`,
            tableName: `Icons`,
            tableView: `CMS`,
            mapping: { SVG: `fileNode` },
          },
          {
            baseId: `appVIQlFfFn7aqzMh`,
            tableName: `Project Logos`,
            tableView: `CMS`,
            mapping: { Image: `fileNode` },
          },
          {
            baseId: `appVIQlFfFn7aqzMh`,
            tableName: `Projects`,
            tableView: `CMS`,
            mapping: { Image: `fileNode` },
            tableLinks: [`Logo`, `Icon`],
          },
          {
            baseId: `appVIQlFfFn7aqzMh`,
            tableName: `Publications`,
            tableView: `CMS`,
          },
          {
            baseId: `appVIQlFfFn7aqzMh`,
            tableName: `Citations`,
            tableView: `CMS`,
            tableLinks: [`Publication_Cited`, `Project`],
          },
        ],
      },
    },
    {
      // filling in the gtag here
      // will set up both the gatsby
      // google analytics plugin and
      // the cookieconsent opt-in system.
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `UA-167624435-1`,
        anonymize: true,
        head: false,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    'talus-gatsby-transformer-svg',
    'gatsby-plugin-styled-components',
    'talus-gatsby-transformer-svg',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-root-import',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
    'gatsby-plugin-sass',
    'gatsby-plugin-mdx',
  ],
}
