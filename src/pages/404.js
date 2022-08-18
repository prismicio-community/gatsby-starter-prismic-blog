import { withPrismicUnpublishedPreview } from "gatsby-plugin-prismic-previews";

const NotFound = () => {
  return <p>Not found</p>;
};

export default withPrismicUnpublishedPreview(NotFound);
