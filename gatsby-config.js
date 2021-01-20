module.exports = {
  siteMetadata: {
    siteUrl: 'http://localhost:8000/',
    title: 'Gatsby Test',
    description: 'This is a test to know more about Gatsby',
    author: 'Jorge Rojas <jl.rojas@viaducto.io>',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-webpack-bundle-analyser-v2`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        resolveSiteUrl: ({ site, allSitePage }) => {
          return site.wp.generalSettings.siteUrl;
        },
      },
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `jl.gatsby`,
    //     short_name: `jl.gatsby`,
    //     start_url: `/`,
    //     background_color: `salmon`,
    //     theme_color: `salmon`,
    //     display: `standalone`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/src/*`],
        // appendScript: require.resolve(`src/custom-sw-code.js`),
      },
    },
  ],
};
