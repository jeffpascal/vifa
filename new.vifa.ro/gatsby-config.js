module.exports = {
  siteMetadata: {
    siteUrl:"http://www.vifa.ro/",
    title: `VIFA cazare lac colibita`,
    description: `Cazare colibita, VIFA numit dupa siteul nostru vila franceza inchiriem case pe marginea lacului in Colibita. Va punem la dispozitie urmatoarele locatii: Vila Franceza, Casa Pescarului, Apartamente modernem, Casa dintre brazi.`,
    author: `@cazare-colibita`,
    socialLinks: {
      facebook: "/vilafranceza",
    },
    menuLinks: {
      romanian: [
        {
          name: "Vila Franceza",
          link: "vila-franceza",
        },
        {
          name: "Casa Pescarului",
          link: "casa-pescarului",
        },
        {
          name: "Apartamente moderne langa lac",
          link: "apartamente-moderne",
        },
      ],
      english: [
        {
          name: "French Villa",
          link: "/en/vila-franceza",
        },
        {
          name: "Traditional fishermans house",
          link: "/en/casa-pescarilor",
        },
        {
          name: "Modern Rooms Lakeside",
          link: "/en/modern-rooms-resort",
        },
      ],
    },
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "vifa.ro",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `indeximages`,
        path: `${__dirname}/src/data`,
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
        icon: `src/images/logo.gif`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-responsive-iframe`],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-154447095-1`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
