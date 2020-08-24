const { registerLinkResolver } = require('@prismicio/gatsby-source-prismic-graphql');
const { linkResolver } = require('./src/utils/linkResolver');
 
registerLinkResolver(linkResolver);