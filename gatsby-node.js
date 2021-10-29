const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const postPages = await graphql(`
    {
      allPrismicPost {
        nodes {
          id
          url
        }
      }
    }
  `)

  postPages.data.allPrismicPost.nodes.forEach((page) => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, 'src/templates/post.js'),
      context: {
        id: page.id,
      },
    })
  })

  const posts = postPages.data.allPrismicPost.nodes
  // The numPages constant will return the closest number between
  // 3 and the total amount of posts
  const numPages = Math.ceil(posts.length / 3)

  // Create homepage
  createPage({
    path: '/',
    component: path.resolve(__dirname, 'src/templates/posts.js'),
    context: {
      limit: 3,
      skip: 0,
    },
  })

  // Create listing pages
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: `/${i + 1}`,
      component: path.resolve(__dirname, 'src/templates/posts.js'),
      context: {
        limit: 3,
        skip: i * 3,
      },
    })
  })
}
