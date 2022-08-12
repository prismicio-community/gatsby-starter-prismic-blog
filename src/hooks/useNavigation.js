import { useStaticQuery, graphql } from "gatsby";

export const useNavigation = () => {
  const queryData = useStaticQuery(graphql`
    query Navigation {
      prismicNavigation {
        _previewable
        data {
          homepageLabel {
            text
          }
          links {
            label {
              text
            }
            link {
              url
            }
          }
        }
      }
    }
  `);

  return queryData.prismicNavigation.data;
};
