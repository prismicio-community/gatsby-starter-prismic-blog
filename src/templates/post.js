import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'

import { Layout } from '../components/Layout'
import { SliceZone } from '../components/SliceZone'

export const query = graphql`
  query BlogPostQuery($uid: String) {
    prismicPost(uid: { eq: $uid }) {
      _previewable
      id
      uid
      lang
      type
      url
      data {
        date
        title {
          richText
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

  return (
    <Layout>
      <div className="container post-header">
        <div className="back">
          <Link to="/">back to list</Link>
        </div>
        <h1>
          {RichText.asText(post.title.richText).length !== 0
            ? RichText.asText(post.title.richText)
            : 'Untitled'}
        </h1>
      </div>
      <SliceZone slices={post.body} />
    </Layout>
  )
}
export default withPrismicPreview(Post)
