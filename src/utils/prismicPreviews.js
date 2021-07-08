/**
 * This file contains configuration for `gatsby-plugin-prismic-previews` to
 * support preview sessions from Prismic.
 *
 * @see https://prismic.io/docs/technologies/previews-gatsby
 */

import { prismicRepo } from '../../prismic-configuration'
import { linkResolver } from './linkResolver'

/**
 * Prismic preview configuration for each repository in your app. This set of
 * configuration objects will be used with the `withPrismicPreview` and
 * `withPrismicUnpublishedPreview` higher order components.
 *
 * If your app needs to support multiple Prismic repositories, add each of
 * their own configuration objects here as additional elements.
 *
 * @see https://prismic.io/docs/technologies/previews-gatsby#1.-update-content-pages-and-templates
*/
export const repositoryConfigs = [
  {
    repositoryName: prismicRepo,
    linkResolver,
  },
]
