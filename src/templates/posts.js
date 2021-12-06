import * as React from 'react'
import { graphql } from 'gatsby'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'

import { Layout } from '../components/Layout'
import { BlogPosts } from '../components/BlogPosts'

export const query = graphql`
  query MyQuery($limit: Int!, $skip: Int!) {
    prismicBloghome {
      _previewable
      data {
        description {
          text
        }
        headline {
          text
        }
        image {
          url
        }
      }
    }
    allPrismicPost(
      sort: { fields: data___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        _previewable
        id
        url
        data {
          title {
            text
          }
          date(formatString: "MMM D, YYYY")
          body {
            ... on PrismicPostDataBodyText {
              id
              slice_label
              slice_type
              primary {
                text {
                  richText
                }
              }
            }
          }
        }
      }
      pageInfo {
        currentPage
        pageCount
      }
    }
  }
`

const Homepage = ({ data }) => {
  if (!data) return null

  const home = data.prismicBloghome.data
  const docs = data.allPrismicPost

  const avatar = { backgroundImage: `url(${home.image.url})` }

  return (
    <Layout>
      <div className="home-header container" data-wio-id={home.id}>
        <div className="blog-avatar" style={avatar} />
        <h1>{home.headline.text}</h1>
        <p className="blog-description">{home.description.text}</p>
      </div>
      <BlogPosts docs={docs} />
    </Layout>
  )
}

export default withPrismicPreview(Homepage)
