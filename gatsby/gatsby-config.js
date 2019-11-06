module.exports = {
  siteMetadata: {
    title: `Vila Franceza`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@jeffpascals`,
    menuLinks: [
      {
        name: "home",
        link: "/",
      },
      {
        name: "Vila Franceza",
        link: "/ro/vila-franceza",
      },
      {
        name: "Casa Pescarului",
        link: "/ro/casa-pescarilor",
      },
      {
        name: "Modern Rooms Resort",
        link: "/ro/modern-rooms-resort",
      },
      {
        name: "EN Vila Franceza",
        link: "/en/vila-franceza",
      },
      {
        name: "EN Casa Pescarului",
        link: "/en/casa-pescarilor",
      },
      {
        name: "EN Modern Rooms Resort",
        link: "/en/modern-rooms-resort",
      }
    ],
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
