import React, { Fragment } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Footer from './Footer'
import '../../stylesheets/main.scss'

export default props => (
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
    render={ data => <Layout data={ data } { ...props }/> }
  />
)

const Layout = ( props ) => {
  // Define the meta title and description
  const title = props.data.site.siteMetadata.title
  const description = props.data.site.siteMetadata.description

  // Load the Prismic edit button
  if(typeof window !== 'undefined' && window.prismic) {
    window.prismic.setupEditButton()
  }

	return(
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{ title }</title>
        <meta name="description" content={ description } />
        <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900" rel="stylesheet" type="text/css"></link>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      </Helmet>
      <main>
        { props.children }
      </main>
      <Footer/>
    </Fragment>
	)
}
