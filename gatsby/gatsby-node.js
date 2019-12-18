/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it


exports.createPages = ({ actions }) => {
    const jsonDataRo = require("./src/data/dataRo.json")
    const jsonDataEn = require("./src/data/dataEn.json")
    const { createPage } = actions
    
    jsonDataEn.forEach(item => {
        createPage({
            path: `/${item.slug}/`,
            component: require.resolve('./src/templates/listing-template.js'),
            context:{item,
            slug: item.slug,
            locale: "en"},
        })
    })
  }