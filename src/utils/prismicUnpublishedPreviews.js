/**
 * This file contains configuration for `gatsby-plugin-prismic-previews` to
 * support preview sessions from Prismic with unpublished documents.
 *
 * @see https://prismic.io/docs/technologies/previews-gatsby
 */

import { componentResolverFromMap } from 'gatsby-plugin-prismic-previews'

import { prismicRepo } from '../../prismic-configuration'
import { linkResolver } from './linkResolver'

import Post from '../templates/post'
import Posts from '../templates/posts'
/**
 * Prismic preview configuration for each repository in your app. This set of
 * configuration objects will be used with the `withPrismicUnpublishedPreview`
 * higher order component.
 *
 * If your app needs to support multiple Prismic repositories, add each of
 * their own configuration objects here as additional elements.
 *
 * @see https://prismic.io/docs/technologies/previews-gatsby#3.-404-not-found-page
 */
export const unpublishedRepositoryConfigs = [
  {
    repositoryName: prismicRepo,
    linkResolver,
    componentResolver: componentResolverFromMap({
      post: Post,
      bloghome: Posts,
    }),
  },
]
