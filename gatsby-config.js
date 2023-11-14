/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `daily_staffing`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-transformer-remark", 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },
  {
    resolve: "gatsby-plugin-google-gtag",
    options: {
      trackingIds: ["UA-126570298-1"],
    }
  },
  // {
  // resolve: `gatsby-plugin-manifest`,
  // options: {
  //   name: `Gatsby Starter Landing Page`,
  //   short_name: `Gatsby Starter Landing Page`,
  //   start_url: `/`,
  //   background_color: `#fff`,
  //   theme_color: `#000`,
  //   display: `browser`,
  //   icon: `src/assets/gatsby-monogram.png`,
  // },
// }
]
};