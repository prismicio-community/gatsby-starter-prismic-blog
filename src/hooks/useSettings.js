import { useStaticQuery, graphql } from "gatsby";

export const useSettings = () => {
  const queryData = useStaticQuery(graphql`
    query Settings {
      prismicSettings {
        data {
          name {
            text
            richText
          }
          description {
            richText
          }
          profilePicture {
            gatsbyImageData
          }
          newsletterDisclaimer {
            richText
          }
          newsletterDescription {
            richText
          }
        }
      }
    }
  `);

  return queryData.prismicSettings.data;
};
