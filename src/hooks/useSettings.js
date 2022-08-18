import { useStaticQuery, graphql } from "gatsby";

export const useSettings = () => {
  const queryData = useStaticQuery(graphql`
    query Settings {
      prismicSettings {
        _previewable
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
