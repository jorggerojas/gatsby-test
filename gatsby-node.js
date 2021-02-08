const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(
    `
      {
        allGhostPost(sort: { fields: [created_at], order: DESC }, limit: 1000) {
          edges {
            node {
              id
              feature_image
              excerpt
              slug
              authors {
                name
                profile_image
              }
            }
          }
        }
      }
    `,
  );

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const posts = result.data.allGhostPost.edges;
  const totalPosts = posts.length;
  const postsPerPage = 4;
  const numPages = Math.ceil(posts.length / postsPerPage);
  Array.from({ length: numPages }).forEach((_, i) => {
    let hasMore = true;
    if (i === numPages-1) {
      hasMore = false;
    }
    createPage({
      path: i === 0 ? `/blog-pagination` : `/blog-pagination/${i + 1}`,
      component: path.resolve('./src/templates/pagination.js'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
        hasMore,
        totalPosts,
      },
    });
  });
};
