/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it


exports.createPages = ({ actions }) => {
    const jsonData = require("./src/data/data.json")
    const { createPage } = actions
    jsonData.forEach(item => {
        createPage({
            path: `/${item.slug}/`,
            component: require.resolve('./src/templates/listing-template.js'),
            context:{item,
            slug: item.slug,
            locale: "ro",
            all: jsonDataRo},
        })
    })
    jsonDataEn.forEach(item => {
        createPage({
            path: `/en/${item.slug}/`,
            component: require.resolve('./src/templates/listing-template.js'),
            context:{item,
            slug: item.slug,
            locale: "en",
            all: jsonDataRo},
        })
    })
    
  }