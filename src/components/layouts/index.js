import React, { Fragment } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Footer from './Footer'
import '../../stylesheets/main.scss'

export default (props) => (
  <StaticQuery
    query={graphql`
      query SiteQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    // eslint-disable-next-line react/jsx-props-no-spreading
    render={(data) => <Layout data={data} {...props} />}
  />
)

const Layout = ({ data, children }) => {
  // Define the meta title and description
  const { title, description } = data.site.siteMetadata

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Helmet>
      <main>{children}</main>
      <Footer />
    </>
  )
}
