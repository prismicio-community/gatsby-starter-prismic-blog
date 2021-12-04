import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { SliceZone } from '@prismicio/react'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'

import { components } from '../slices'
import { Layout } from '../components/Layout'

export const query = graphql`
  query BlogPostQuery($id: String) {
    prismicPost(id: { eq: $id }) {
      _previewable
      id
      uid
      lang
      type
      url
      data {
        date
        title {
          text
        }
        body {
          ... on PrismicSliceType {
            id
            slice_label
            slice_type
          }
          ...PostDataBodyText
          ...PostDataBodyQuote
          ...PostDataBodyImageWithCaption
        }
      }
    }
  }
`

const Post = ({ data }) => {
  if (!data) return null

  const post = data.prismicPost.data
  const title = post.title.text || 'Untitled'

  return (
    <Layout>
      <div className="container post-header">
        <div className="back">
          <Link to="/">back to list</Link>
        </div>
        <h1>{title}</h1>
      </div>
      <SliceZone slices={post.body} components={components} />
    </Layout>
  )
}
export default withPrismicPreview(Post)
