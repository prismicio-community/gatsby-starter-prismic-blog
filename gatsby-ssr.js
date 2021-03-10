const React = require('react')
const { PreviewStoreProvider } = require('gatsby-source-prismic')

exports.wrapRootElement = ({ element }) => (
  <PreviewStoreProvider>{element}</PreviewStoreProvider>
)
