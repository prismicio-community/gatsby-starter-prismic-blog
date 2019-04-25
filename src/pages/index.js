import React from 'react'
import { RichText } from 'prismic-reactjs'
import { graphql } from 'gatsby';
import Layout from '../components/layouts'
import BlogPosts from '../components/BlogPosts'

// Query for the Blog Home content in Prismic
export const query = graphql`
{
  prismic{
    allBlog_homes(uid:null){
      edges{
        node{
          _meta{
            id
            type
          }
          headline
          description
          image
        }
      }
    }
    allPosts(sortBy: date_DESC){
      edges{
        node{
          _meta{
            id
            uid
            type
          }
          title
          date
          body{
            ... on PRISMIC_PostBodyText{
              type
              label
              primary{
                text
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
  const avatar = { backgroundImage: 'url(' + home.image.url +')' };
  return (
    <div className="home-header container" data-wio-id={ home._meta.id }>
      <div className="blog-avatar" style={ avatar }>
      </div>
      <h1>{ RichText.asText(home.headline) }</h1>
      <p className="blog-description">{ RichText.asText(home.description) }</p>
    </div>
  );
};

export default ({ data }) => {
  // Define the Blog Home & Blog Post content returned from Prismic
  const doc = data.prismic.allBlog_homes.edges.slice(0,1).pop();
  const posts = data.prismic.allPosts.edges;

  if(!doc) return null;

  return(
    <Layout>
      <BlogHomeHead home={ doc.node } />
      <BlogPosts posts={ posts }/>
    </Layout>
  )
}
