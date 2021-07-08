import * as React from 'react'
import { ImageCaption, Quote, Text } from '../slices'

export const SliceZone = ({ slices }) => {
  const sliceComponents = {
    image_caption: ImageCaption,
    quote: Quote,
    text: Text,
  }

  return slices.map((slice, index) => {
    const SliceComponent = sliceComponents[slice.slice_type]

    if (SliceComponent) {
      return <SliceComponent slice={slice} key={`slice-${index}`} />
    }

    return null
  })
}
