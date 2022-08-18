import { graphql } from "gatsby";
import { SliceZone } from "@prismicio/react";
import { withPrismicPreview } from "gatsby-plugin-prismic-previews";

import { useSettings } from "../hooks/useSettings";
import { components } from "../slices";

import { Layout } from "../components/Layout";

const Page = ({ data }) => {
  const page = data.prismicPage;

  return (
    <Layout>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
};

export default withPrismicPreview(Page);

export const Head = ({ data }) => {
  const page = data.prismicPage;

  const settings = useSettings();

  return (
    <title>
      {page.data.title.text} | {settings.name.text}
    </title>
  );
};

export const query = graphql`
  query Page($id: String!) {
    prismicPage(id: { eq: $id }) {
      _previewable
      data {
        title {
          text
        }
        slices {
          ... on PrismicSliceType {
            id
            slice_type
          }
          ...PrismicImage
          ...PrismicQuote
          ...PrismicText
        }
      }
    }
  }
`;
