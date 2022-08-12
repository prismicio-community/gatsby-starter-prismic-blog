import { useStaticQuery, graphql } from "gatsby";

export const useLatestArticles = () => {
  const queryData = useStaticQuery(graphql`
    query LatestArticles {
      allPrismicArticle(
        sort: {
          fields: [data___publishDate, first_publication_date]
          order: DESC
        }
        limit: 3
      ) {
        nodes {
          _previewable
          url
          first_publication_date(formatString: "MMM D, YYYY")
          data {
            title {
              text
            }
            publishDate(formatString: "MMM D, YYYY")
          }
        }
      }
    }
  `);

  return queryData.allPrismicArticle.nodes;
};
