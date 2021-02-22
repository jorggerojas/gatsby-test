const path = require("path");

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  if (page.path.match(/^\/author/)) {
    createPage({
      path: "/author",
      matchPath: "/author/:slug",
      component: path.resolve("src/pages/author.js")
    })
  }
  if (page.path.match(/^\/category/)) {
    createPage({
      path: "/category",
      matchPath: "/category/:slug",
      component: path.resolve("src/pages/category.js")
    })
  }
  if (page.path.match(/^\/post/)) {
    createPage({
      path: "/post",
      matchPath: "/post/:slug",
      component: path.resolve("src/pages/post.js")
    })
  }
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html' || stage === 'develop-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /locomotive-scroll/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}