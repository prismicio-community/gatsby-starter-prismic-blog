import React from 'react'
import { RichText } from 'prismic-reactjs'
import GatsbyLink from '../GatsbyLink'

export default ({ slice }) => (
  <div className="post-text container">
    <div>
      <RichText
        render={slice.primary.text.raw || []}
        serializeHyperlink={GatsbyLink}
      />
    </div>
  </div>
)
