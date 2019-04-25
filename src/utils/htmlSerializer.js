// -- The HTML Serializer
// This function will be used to modify the way that a Rich Text or Title field is rendered.

import React from 'react'
import { Link as PrismicLink } from 'prismic-reactjs'
import { Elements } from 'prismic-richtext'
import { linkResolver } from './linkResolver'
import { Link } from "gatsby"

export default function (type, element, content, children, index) {
  // Generate links to Prismic Documents as <Link> components
  if (type === Elements.hyperlink) {
    let result = ''
    const url = PrismicLink.url(element.data, linkResolver)

    if (element.data.link_type === 'Document') {
      result = <Link to={ url } key={ index }>{ content }</Link>
    } else {
      const target = element.data.target ? { 'target':element.data.target, 'rel':'noopener' } : {}
      result = <a href={ url } { ...target } key={ index }>{ content }</a>
    }
    return result
  }

  // If the image is also a link to a Prismic Document, it will return a <Link> component
  if (type === Elements.image) {
    let result = <img src={ element.url } alt={ element.alt || '' } copyright={ element.copyright || '' } />

    if (element.linkTo) {
      const url = PrismicLink.url(element.linkTo, linkResolver)

      if (element.linkTo.link_type === 'Document') {
        result = <Link to={ url } key={ index }>{ result }</Link>
      } else {
        const target = element.linkTo.target ? { 'target':element.linkTo.target, 'rel':'noopener' } : {}
        result = <a href={ url } { ...target }>{ result }</a>
      }
    }
    const wrapperClassList = [element.label || '', 'block-img'];
    result = <p className={ wrapperClassList.join(' ') } key={ index }>{result}</p>
    return result
  }

  // Return null to stick with the default behavior for everything else
  return null;
};
