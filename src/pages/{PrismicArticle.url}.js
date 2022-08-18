import { graphql } from "gatsby";
import { PrismicLink, SliceZone } from "@prismicio/react";
import { withPrismicPreview } from "gatsby-plugin-prismic-previews";

import { useLatestArticles } from "../hooks/useLatestArticles";
import { useSettings } from "../hooks/useSettings";
import { components } from "../slices";

import { Layout } from "../components/Layout";
import { Bounded } from "../components/Bounded";
import { HorizontalDivider } from "../components/HorizontalDivider";
import { Heading } from "../components/Heading";

const LatestArticle = ({ article }) => {
  const date = article.data.publishDate || article.first_publication_date;

  return (
    <li>
      <h1 className="mb-3 text-3xl font-semibold tracking-tighter text-slate-800 md:text-4xl">
        <PrismicLink href={article.url}>{article.data.title.text}</PrismicLink>
      </h1>
      <p className="font-serif italic tracking-tighter text-slate-500">
        {date}
      </p>
    </li>
  );
};

const Article = ({ data }) => {
  const article = data.prismicArticle;
  const date = article.data.publishDate || article.first_publication_date;

  const latestArticles = useLatestArticles();

  return (
    <Layout withHeaderDivider={false} withProfile={false}>
      <Bounded>
        <PrismicLink
          href="/"
          className="font-semibold tracking-tight text-slate-400"
        >
          &larr; Back to articles
        </PrismicLink>
      </Bounded>
      <article>
        <Bounded className="pb-0">
          <h1 className="mb-3 text-3xl font-semibold tracking-tighter text-slate-800 md:text-4xl">
            {article.data.title.text}
          </h1>
          <p className="font-serif italic tracking-tighter text-slate-500">
            {date}
          </p>
        </Bounded>
        <SliceZone slices={article.data.slices} components={components} />
      </article>
      {latestArticles.length > 0 && (
        <Bounded>
          <div className="grid grid-cols-1 justify-items-center gap-16 md:gap-24">
            <HorizontalDivider />
            <div className="w-full">
              <Heading size="2xl" className="mb-10">
                Latest articles
              </Heading>
              <ul className="grid grid-cols-1 gap-12">
                {latestArticles.map((article) => (
                  <LatestArticle key={article.id} article={article} />
                ))}
              </ul>
            </div>
          </div>
        </Bounded>
      )}
    </Layout>
  );
};

export default withPrismicPreview(Article);

export const Head = ({ data }) => {
  const article = data.prismicArticle;

  const settings = useSettings();

  return (
    <title>
      {article.data.title.text} | {settings.name.text}
    </title>
  );
};

export const query = graphql`
  query Article($id: String!) {
    prismicArticle(id: { eq: $id }) {
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
