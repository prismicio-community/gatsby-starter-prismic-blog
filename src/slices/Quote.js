import * as React from 'react'
import { graphql } from 'gatsby'

export const Quote = ({ slice }) => (
  <div className="post-quote container">
    <blockquote>{slice.primary.quote.text}</blockquote>
  </div>
)

export const query = graphql`
  fragment PostDataBodyQuote on PrismicPostDataBodyQuote {
    primary {
      quote {
        text
      }
    }
  }
`
