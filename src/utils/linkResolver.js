// -- The Link Resolver
// This function will be used to generate links to Prismic documents
// As your project grows, you should update this function according to your routes

const linkResolver = (doc) => {
  if (doc.type === 'post') {
    return `/blog/${doc.uid}`
  }
  return '/'
}

module.exports = linkResolver
