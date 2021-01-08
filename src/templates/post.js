import React from 'react'
import { graphql, Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import { withPreview } from 'gatsby-source-prismic'
import Layout from '../components/layouts'
import { ImageCaption, Quote, Text } from '../components/slices'

// Query for the Blog Post content in Prismic
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
          ... on PrismicPostBodyText {
            slice_label
            slice_type
            primary {
              text {
                raw
              }
            }
          }
          ... on PrismicPostBodyQuote {
            slice_label
            slice_type
            primary {
              quote {
                raw
              }
            }
          }
          ... on PrismicPostBodyImageWithCaption {
            id
            slice_label
            slice_type
            primary {
              image {
                alt
                url
              }
              caption {
                raw
              }
            }
          }
        }
      }
    }
  }
`

// Sort and display the different slice options
const PostSlices = ({ slices }) =>
  slices.map((slice, index) => {
    const res = (() => {
      switch (slice.slice_type) {
        case 'text':
          return (
            <div key={index} className="homepage-slice-wrapper">
              <Text slice={slice} />
            </div>
          )

        case 'quote':
          return (
            <div key={index} className="homepage-slice-wrapper">
              <Quote slice={slice} />
            </div>
          )

        case 'image_with_caption':
          return (
            <div key={index} className="homepage-slice-wrapper">
              <ImageCaption slice={slice} />
            </div>
          )

        default:
      }
    })()
    return res
  })

// Display the title, date, and content of the Post
const PostBody = ({ blogPost }) => {
  return (
    <div>
      <div className="container post-header">
        <div className="back">
          <Link to="/">back to list</Link>
        </div>
        <h1>
          {RichText.asText(blogPost.title.raw).length !== 0
            ? RichText.asText(blogPost.title.raw)
            : 'Untitled'}
        </h1>
      </div>
      {/* Go through the slices of the post and render the appropiate one */}
      <PostSlices slices={blogPost.body} />
    </div>
  )
}

export const Post = ({ data }) => {
  if (!data) return null
  // Define the Post content returned from Prismic
  const post = data.prismicPost.data

  return (
    <Layout>
      <PostBody blogPost={post} />
    </Layout>
  )
}

export default withPreview(Post)
