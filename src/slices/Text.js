import * as React from 'react'
import { graphql } from 'gatsby'
import { PrismicRichText } from '@prismicio/react'

export const Text = ({ slice }) => (
  <div className="post-text container">
    <div>
      <PrismicRichText field={slice.primary.text.richText} />
    </div>
  </div>
)

export const query = graphql`
  fragment PostDataBodyText on PrismicPostDataBodyText {
    primary {
      text {
        richText
      }
    }
  }
`
