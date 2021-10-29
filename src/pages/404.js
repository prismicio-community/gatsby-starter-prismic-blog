import * as React from 'react'
import { withPrismicUnpublishedPreview } from 'gatsby-plugin-prismic-previews'

const NotFoundPage = () => (
  <div className="not-found">
    <h1>404</h1>
    <h3>The page you are looking for was not found</h3>
    <p>
      <a href="/">
        <button type="button">Return to homepage</button>
      </a>
    </p>
  </div>
)

export default withPrismicUnpublishedPreview(NotFoundPage)
