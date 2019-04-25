import React from 'react'
import { RichText } from 'prismic-reactjs'

export default ({ slice }) =>
  <div className="post-quote container">
    <blockquote>
      { RichText.asText(slice.primary.quote) }
    </blockquote>
  </div>
