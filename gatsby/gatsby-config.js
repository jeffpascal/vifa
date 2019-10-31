module.exports = {
  siteMetadata: {
    title: `Manastirea vlasiosa`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@jeffpascals`,
    menuLinks:[
    {
       name:'home',
       link:'/'
    },
    {
       name:'Vila Franceza',
       link:'/vila-franceza'
    },
    {
       name:'Casa Pescarului',
       link:'/casa-pescarilor'
    },
    {
       name:'Modern Rooms Resort',
       link:'/modern-rooms-resort'
    }
  ]
  },
  plugins: [
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "www.vifa.com",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
