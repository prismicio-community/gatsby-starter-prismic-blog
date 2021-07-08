import * as React from 'react'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import { CustomLink } from '../utils/customLink'

export const Text = ({ slice }) => (
  <div className="post-text container">
    <div>
      <RichText
        render={slice.primary.text.raw || []}
        serializeHyperlink={CustomLink}
      />
    </div>
  </div>
)

export const query = graphql`
  fragment PostDataBodyText on PrismicPostDataBodyText {
    primary {
      text {
        raw
      }
    }
  }
`
