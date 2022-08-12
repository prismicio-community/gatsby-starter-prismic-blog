import { forwardRef } from "react";
import { Link as GatsbyLink } from "gatsby";
import { PrismicLink, PrismicProvider } from "@prismicio/react";
import { PrismicPreviewProvider } from "gatsby-plugin-prismic-previews";

import { Heading } from "./components/Heading";

import { repositoryConfigs } from "./prismicPreviews";

/**
 * An adapter to support Gatsby's `<Link>` component when using `<PrismicLink>`.
 */
const GatsbyLinkShim = forwardRef(({ href, ...props }, ref) => {
  return <GatsbyLink to={href} ref={ref} {...props} />;
});
GatsbyLinkShim.displayName = "GatsbyLinkShim";

const richTextComponents = {
  heading1: ({ children }) => (
    <Heading as="h2" size="3xl" className="mb-7 mt-12 first:mt-0 last:mb-0">
      {children}
    </Heading>
  ),
  heading2: ({ children }) => (
    <Heading as="h3" size="2xl" className="mb-7 last:mb-0">
      {children}
    </Heading>
  ),
  heading3: ({ children }) => (
    <Heading as="h4" size="xl" className="mb-7 last:mb-0">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => <p className="mb-7 last:mb-0">{children}</p>,
  oList: ({ children }) => (
    <ol className="mb-7 pl-4 last:mb-0 md:pl-6">{children}</ol>
  ),
  oListItem: ({ children }) => (
    <li className="mb-1 list-decimal pl-1 last:mb-0 md:pl-2">{children}</li>
  ),
  list: ({ children }) => (
    <ul className="mb-7 pl-4 last:mb-0 md:pl-6">{children}</ul>
  ),
  listItem: ({ children }) => (
    <li className="mb-1 list-disc pl-1 last:mb-0 md:pl-2">{children}</li>
  ),
  preformatted: ({ children }) => (
    <pre className="mb-7 rounded bg-slate-100 p-4 text-sm last:mb-0 md:p-8 md:text-lg">
      <code>{children}</code>
    </pre>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold">{children}</strong>
  ),
  hyperlink: ({ children, node }) => (
    <PrismicLink
      field={node.data}
      className="underline decoration-1 underline-offset-2"
    >
      {children}
    </PrismicLink>
  ),
};

// Adds a shared React Context for Prismic components and preview sessions.
export const wrapRootElement = ({ element }) => (
  <PrismicProvider
    internalLinkComponent={GatsbyLinkShim}
    richTextComponents={richTextComponents}
  >
    <PrismicPreviewProvider repositoryConfigs={repositoryConfigs}>
      {element}
    </PrismicPreviewProvider>
  </PrismicProvider>
);
