/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`);
const fs = require('fs');
exports.createPages = ({ actions }) => {
  const { createPage } = actions;
  const pageData = JSON.parse(fs.readFileSync('./src/data/data.json', { encoding: 'utf-8' }));
  const blogPostTemplate = path.resolve(`src/templates/page.js`);
  pageData.pages.forEach(page => {
    createPage({
      path: page.slug,
      component: blogPostTemplate,
      context: {
        ...page,
      },
    });
  });
};