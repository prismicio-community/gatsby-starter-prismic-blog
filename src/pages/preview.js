import * as React from 'react'
import { withPrismicPreviewResolver } from 'gatsby-plugin-prismic-previews'

const PreviewPage = ({ isPreview, ...props }) => {
  if (isPreview === false) return 'Not a preview!'

  return <p>Loading</p>
}

export default withPrismicPreviewResolver(PreviewPage)
