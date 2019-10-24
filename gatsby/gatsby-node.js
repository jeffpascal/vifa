/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it


exports.createPages = ({ actions }) => {
    const data = require("./src/data/data.json")
    const { createPage } = actions
    data.forEach(data => {
        createPage({
            path: `/${data.slug}/`,
            component: require.resolve('./src/templates/listing-template.js'),
            context:{data},
        })
    })
    
  }