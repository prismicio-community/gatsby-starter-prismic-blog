import { graphql } from "gatsby";
import { PrismicLink } from "@prismicio/react";
import { GatsbyImage } from "gatsby-plugin-image";
import { withPrismicPreview } from "gatsby-plugin-prismic-previews";

import { useSettings } from "../hooks/useSettings";

import { Layout } from "../components/Layout";
import { Bounded } from "../components/Bounded";
import { Heading } from "../components/Heading";

const findFirstImage = (slices) => {
  const imageSlice = slices.find((slice) => slice.slice_type === "image");

  return imageSlice.primary.image;
};

const getExcerpt = (slices) => {
  const text = slices
    .filter((slice) => slice.slice_type === "text")
    .map((slice) => slice.primary.text.text)
    .join(" ");

  const excerpt = text.substring(0, 300);

  if (text.length > 300) {
    return excerpt.substring(0, excerpt.lastIndexOf(" ")) + "…";
  } else {
    return excerpt;
  }
};

const Article = ({ article }) => {
  const featuredImage =
    article.data.featuredImage || findFirstImage(article.data.slices);
  const date = article.data.publishDate || article.first_publication_date;
  const excerpt = getExcerpt(article.data.slices);

  return (
    <li className="grid grid-cols-1 items-start gap-6 md:grid-cols-3 md:gap-8">
      <PrismicLink href={article.url} tabIndex="-1">
        <div className="relative aspect-[4/3] bg-gray-100">
          {featuredImage.gatsbyImageData && (
            <GatsbyImage
              image={featuredImage.gatsbyImageData}
              alt={featuredImage.alt}
              layout="fullWidth"
              className="object-cover"
            />
          )}
        </div>
      </PrismicLink>
      <div className="grid grid-cols-1 gap-3 md:col-span-2">
        <Heading as="h2">
          <PrismicLink href={article.url}>
            {article.data.title.text}
          </PrismicLink>
        </Heading>
        <p className="font-serif italic tracking-tighter text-slate-500">
          {date}
        </p>
        {excerpt && (
          <p className="font-serif leading-relaxed md:text-lg md:leading-relaxed">
            {excerpt}
          </p>
        )}
      </div>
    </li>
  );
};

const Page = ({ data }) => {
  const articles = data.allPrismicArticle.nodes;

  return (
    <Layout withHeaderDivider={false}>
      <Bounded size="widest">
        <ul className="grid grid-cols-1 gap-16">
          {articles.map((article) => (
            <Article key={article.id} article={article} />
          ))}
        </ul>
      </Bounded>
    </Layout>
  );
};

export default withPrismicPreview(Page);

export const Head = () => {
  const settings = useSettings();

  return <title>{settings.name.text}</title>;
};

export const query = graphql`
  query Home {
    allPrismicArticle(
      sort: {
        fields: [data___publishDate, first_publication_date]
        order: DESC
      }
    ) {
      nodes {
        _previewable
        url
        first_publication_date(formatString: "MMM D, YYYY")
        data {
          featuredImage {
            gatsbyImageData
            alt
          }
          title {
            text
          }
          publishDate(formatString: "MMM D, YYYY")
          slices {
            ... on PrismicSliceType {
              id
              slice_type
            }
            ... on PrismicTextDefault {
              primary {
                text {
                  text
                }
              }
            }
            ... on PrismicImageWide {
              primary {
                image {
                  gatsbyImageData
                  alt
                }
              }
            }
            ... on PrismicImageDefault {
              primary {
                image {
                  gatsbyImageData
                  alt
                }
              }
            }
          }
        }
      }
    }
  }
`;
