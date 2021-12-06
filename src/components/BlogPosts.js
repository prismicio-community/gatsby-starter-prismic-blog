import * as React from 'react'
import { Link } from 'gatsby'
import * as prismicH from '@prismicio/helpers'

import { Pagination } from '../utils/pagination'

// Function to retrieve a small preview of the post's text
const firstParagraph = (post) => {
  // // Find the first text slice of post's body
  const firstTextSlice = post.body.find((slice) => slice.slice_type === 'text')
  if (firstTextSlice != null) {
    // Set the character limit for the text we'll show in the homepage
    const textLimit = 300
    const text = prismicH.asText(firstTextSlice.primary.text.richText)
    const limitedText = text.substring(0, textLimit)

    if (text.length > textLimit) {
      // Cut only up to the last word and attach '...' for readability
      return (
        <p>{`${limitedText.substring(0, limitedText.lastIndexOf(' '))}...`}</p>
      )
    }
    // If it's shorter than the limit, just show it normally
    return <p>{text}</p>
  }
  // If there are no slices of type 'text', return nothing
  return null
}

// A summary of the Blog Post
const PostSummary = ({ post, id }) => {
  return (
    <div className="post-summary" key={id}>
      <h2>
        {/* We render a link to a particular post
         * using the linkResolver for the url and its title */}
        <Link to={post.url}>{post.data.title.text || 'Untitled'}</Link>
      </h2>
      <p className="blog-post-meta">
        <time>{post.data.date}</time>
      </p>
      {/* Renders a small preview of the post's text */}
      {firstParagraph(post.data)}
    </div>
  )
}

export const BlogPosts = ({ docs }) => {
  if (!docs) return null

  const posts = docs.nodes

  return (
    <div className="blog-posts container">
      {posts.map((post) => (
        <PostSummary post={post} key={post.id} />
      ))}
      <Pagination pageInfo={docs.pageInfo} />
    </div>
  )
}
