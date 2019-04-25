import React from 'react'
import prismicLogo from '../../images/logo-prismic.svg'

export default () =>
  <footer className="container">
    <p>
      Proudly published with <a href="https://prismic.io" target="_blank" rel="noopener noreferrer">Prismic</a>
      <br/>
      <a href="https://prismic.io" target="_blank" rel="noopener noreferrer">
      <img className="footer-logo" src={ prismicLogo } alt="Gray Prismic logo"/>
      </a>
    </p>
  </footer>
