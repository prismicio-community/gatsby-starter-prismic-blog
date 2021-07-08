import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'

import { repositoryConfigs } from '../utils/prismicPreviews'

import { Layout } from '../components/Layout'
import { SliceZone } from '../components/SliceZone'

export const query = graphql`
  query BlogPostQuery($uid: String) {
    prismicPost(uid: { eq: $uid }) {
      id
      uid
      lang
      type
      url
      data {
        date
        title {
          raw
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
          {RichText.asText(post.title.raw).length !== 0
            ? RichText.asText(post.title.raw)
            : 'Untitled'}
        </h1>
      </div>
      <SliceZone slices={post.body} />
    </Layout>
  )
}
export default withPrismicPreview(Post, repositoryConfigs)
