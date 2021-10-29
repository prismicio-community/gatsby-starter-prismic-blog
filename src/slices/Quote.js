import * as React from 'react'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'

export const Quote = ({ slice }) => (
  <div className="post-quote container">
    <blockquote>{RichText.asText(slice.primary.quote.richText)}</blockquote>
  </div>
)

export const query = graphql`
  fragment PostDataBodyQuote on PrismicPostDataBodyQuote {
    primary {
      quote {
        richText
      }
    }
  }
`
