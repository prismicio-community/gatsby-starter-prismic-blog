import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'

import { repositoryConfigs } from '../utils/prismicPreviews'

import { Layout } from '../components/Layout'
import { BlogPosts } from '../components/BlogPosts'

export const query = graphql`
  query MyQuery($limit: Int!, $skip: Int!) {
    prismicBloghome {
      data {
        description {
          raw
        }
        headline {
          raw
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
        id
        url
        data {
          title {
            raw
          }
          date
          body {
            ... on PrismicPostDataBodyText {
              id
              slice_label
              slice_type
              primary {
                text {
                  raw
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
        <h1>{RichText.asText(home.headline.raw)}</h1>
        <p className="blog-description">
          {RichText.asText(home.description.raw)}
        </p>
      </div>
      <BlogPosts docs={docs} />
    </Layout>
  )
}

export default withPrismicPreview(Homepage, repositoryConfigs)
