import * as React from 'react'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'

// Default Image
const DefaultImage = ({ slice }) => (
  <div className="post-image container">
    <figcaption className="block-img">
      <img src={slice.primary.image.url} alt={slice.primary.image.alt} />
      {slice.primary.caption
      && RichText.asText(slice.primary.caption.raw) !== '' ? (
        <figcaption className="image-label">
          {RichText.asText(slice.primary.caption.raw)}
        </figcaption>
        ) : null}
    </figcaption>
  </div>
)

// Emphasized Image
const EmphasizedImage = ({ slice }) => (
  <div className="post-image container">
    <figcaption className="block-img emphasized">
      <img src={slice.primary.image.url} alt={slice.primary.image.alt} />
      {slice.primary.caption
      && RichText.asText(slice.primary.caption.raw) !== '' ? (
        <figcaption className="image-label">
          {RichText.asText(slice.primary.caption.raw)}
        </figcaption>
        ) : null}
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
      {slice.primary.caption
      && RichText.asText(slice.primary.caption.raw) !== '' ? (
        <span className="image-label">
          {RichText.asText(slice.primary.caption.raw)}
        </span>
        ) : null}
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
        raw
      }
    }
  }
`