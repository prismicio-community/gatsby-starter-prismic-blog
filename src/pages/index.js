import React from 'react'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import { withPreview } from 'gatsby-source-prismic'
import Layout from '../components/layouts'
import BlogPosts from '../components/BlogPosts'

// Query for the Blog Home content in Prismic
export const query = graphql`
  query MyQuery {
    prismicBloghome {
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
      id
      type
    }
    allPrismicPost(sort: { fields: data___date, order: DESC }) {
      edges {
        node {
          url
          id
          uid
          type
          data {
            title {
              raw
            }
            date
            body {
              ... on PrismicPostBodyText {
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
      }
    }
  }
`

// Using the queried Blog Home document data, we render the top section
const BlogHomeHead = ({ home }) => {
  const avatar = { backgroundImage: `url(${home.image.url})` }
  return (
    <div className="home-header container" data-wio-id={home.id}>
      <div className="blog-avatar" style={avatar} />
      <h1>{RichText.asText(home.headline)}</h1>
      <p className="blog-description">{RichText.asText(home.description)}</p>
    </div>
  )
}

export const Homepage = ({ data }) => {
  if (!data) return null
  // Define the Blog Home & Blog Post content returned from Prismic
  const home = data.prismicBloghome.data
  const posts = data.allPrismicPost.edges

  return (
    <Layout>
      <BlogHomeHead home={home} />
      <BlogPosts posts={posts} />
    </Layout>
  )
}

export default withPreview(Homepage)
