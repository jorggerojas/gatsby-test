module.exports = {
  siteMetadata: {
    siteUrl: 'http://localhost:8000/',
    title: 'Gatsby Test',
    description: 'This is a test to know more about Gatsby',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-webpack-bundle-analyser-v2`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-ghost`,
      options: {
        apiUrl: `	http://138.197.11.134:8080`,
        contentApiKey: `914978ad9d06eb035acbd2a914`,
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.5, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations
        // Advanced Options
        selector: '[data-sal]', // Selector of the elements to be animated
        animateClassName: 'sal-animate', // Class name which triggers animation
        disabledClassName: 'sal-disabled', // Class name which defines the disabled state
        rootMargin: '0% 50%', // Corresponds to root's bounding box margin
        enterEventName: 'sal:in', // Enter event name
        exitEventName: 'sal:out', // Exit event name
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `jl.gatsby`,
        short_name: `jl.gatsby`,
        start_url: `/`,
        background_color: `salmon`,
        theme_color: `salmon`,
        display: `standalone`,
        icon: '/static/favicon.ico',
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/src/*`],
        // appendScript: require.resolve(`src/custom-sw-code.js`),
      },
    },
  ],
};
