import * as React from 'react'
import { graphql } from 'gatsby'

// Default Image
const DefaultImage = ({ slice }) => (
  <div className="post-image container">
    <figcaption className="block-img">
      <img src={slice.primary.image.url} alt={slice.primary.image.alt} />
      {slice.primary.caption.text && (
        <figcaption className="image-label">
          {slice.primary.caption.text}
        </figcaption>
      )}
    </figcaption>
  </div>
)

// Emphasized Image
const EmphasizedImage = ({ slice }) => (
  <div className="post-image container">
    <figcaption className="block-img emphasized">
      <img src={slice.primary.image.url} alt={slice.primary.image.alt} />
      {slice.primary.caption.text && (
        <figcaption className="image-label">
          {slice.primary.caption.text}
        </figcaption>
      )}
    </figcaption>
  </div>
)

// Full Width Image
const FullWidthImage = ({ slice }) => (
  <div
    className="post-image full-width-image"
    style={{ backgroundImage: `url(${slice.primary.image.url})` }}
  >
    <div className="wrapper">
      {slice.primary.caption.text && (
        <span className="image-label">{slice.primary.caption.text}</span>
      )}
    </div>
  </div>
)

// Function to determine the image type
const renderSwitch = (slice) => {
  switch (slice.slice_label) {
    case 'image-full-width':
      return <FullWidthImage slice={slice} />
    case 'emphasized':
      return <EmphasizedImage slice={slice} />
    default:
      return <DefaultImage slice={slice} />
  }
}

export const ImageCaption = ({ slice }) => <>{renderSwitch(slice)}</>

export const query = graphql`
  fragment PostDataBodyImageWithCaption on PrismicPostDataBodyImageWithCaption {
    primary {
      image {
        alt
        url
      }
      caption {
        text
      }
    }
  }
`
