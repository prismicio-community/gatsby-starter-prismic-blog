import React from 'react'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from '../../utils/linkResolver'
import htmlSerializer from '../../utils/htmlSerializer'

export default ({ slice }) =>
  <div className="post-text container">
    <div>
      { RichText.render(slice.primary.text, linkResolver, htmlSerializer) }
    </div>
  </div>
