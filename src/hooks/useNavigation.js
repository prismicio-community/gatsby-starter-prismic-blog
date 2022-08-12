import { useStaticQuery, graphql } from "gatsby";

export const useNavigation = () => {
  const queryData = useStaticQuery(graphql`
    query Navigation {
      prismicNavigation {
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
