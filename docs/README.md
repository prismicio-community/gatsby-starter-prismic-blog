# Prismic + Gatsby Blog Starter

This page covers how to use **Prismic + Gatsby Blog Starter** with Prismic.

- **Demo**: [Open live demo][live-demo]
- **Learn more about Prismic and Gatsby**: [Prismic Gatsby Documentation][prismic-docs]

&nbsp;

<img src="https://user-images.githubusercontent.com/8601064/163122284-5b80a81e-a4fd-482e-9bd5-99b22f61175f.png" alt="Screenshots of the site seen on deskop and mobile browsers" />

&nbsp;

## 🚀 Quick Start

To start a new project using this starter, run the following command in your terminal:

```sh
npx prismic-cli@latest theme --theme-url https://github.com/prismicio-community/gatsby-starter-prismic-blog --conf sm.json
```

The command will do the following:

1. Start a new Gatsby project using this starter.
2. Ask you to log in to Prismic or [create an account][prismic-sign-up].
3. Create a new Prismic content repository with sample content.

When you're ready to start your project, run the following command:

```sh
npm run dev
```

To learn more about working with Prismic, [**see the Prismic docs**](https://prismic.io/docs/technologies/gatsby).

## Using and customizing your project

To get started after creating your new project, go to [prismic.io/dashboard](https://prismic.io/dashboard), click on the repository for this website, and start editing.

### Write an article

To create a new article, click on the green pencil icon in the top-right corner of the screen, then select **Article**. After adding some content, click **Save** and then **Publish**.

Your article will appear in the homepage feed.

### Create a page

To create a page, click on the green pencil icon, then select **Page**.

Your new page will be accessible by its URL, but it won't appear on the website automatically. To let users discover it, add it to the navigation.

### Update the navigation

To add a page to your navigation menu, go to the document list and open the **Navigation** document. In the **Links** group, click **Add a new element in Links**. Select the page to add and fill in a label.

### Preview documents

In your repository, go to _Settings > Previews_. Under _Create a New Preview_, fill in the three fields:

- a name (like **Development** or **Production**)
- the domain where your app is running (like <http://localhost:3000> or <https://www.yoursite.com>)
- `/api/preview` for the Link Resolver

Now, go to a draft document and click the eye icon in the top-right corner.

To learn more about how to configure previews, read [Preview Drafts in Gatsby](https://prismic.io/docs/technologies/preview-content-gatsby) in the Prismic documentation.

### Customize this blog

This website is preconfigured with Prismic. It has three Prismic packages installed:

- `@prismicio/react` provides React components for rendering content from Prismic
- `gatsby-source-prismic` pulls content from Prismic into your Gatsby app
- `gatsby-plugin-prismic-previews` provides Prismic preview support

These packages are already integrated and employed in this app. Take a look at the code to see how they're used.

### Edit the code

There are two steps to rendering content from Prismic in your Gatsby project:

1. Fetch content from the Prismic API using `@prismicio/client`.
2. Template the content using components from `@prismicio/react`.

Here are some of the files in your project that you can edit:

- `gatsby-config.js` - This file includes configuration for your Gatsby app and how it pulls in content from Prismic.
- `src/pages/index.js` - This is the app homepage.
- `src/pages/{PrismicPage.url}.js` - This is the page component, which queries and renders a page document from your Prismic repository based on the UID.
- `src/pages/{PrismicArticle.url}.js` - This is the article page component, which queries and renders an article document from your Prismic repository based on the UID.
- `src/api/contact.js` - This is the API endpoint for your contact form. To use the contact form, send a POST request to a back end from this endpoint.
- `src/api/sign-up.js` - This is the API endpoint for your newsletter form. To allow signups, send a POST request to a newsletter service like Mailchimp.
- `src/slices/\*/index.js` - Each Slice in your project has an index.js file that renders the Slice component. Edit this file to customize your Slices.

These are important files that you should leave as-is:

- `src/slices/` - This directory contains Slice components, which are generated programmatically by Slice Machine. To customize a Slice template, you can edit the Slice's index.js file. To add Slices, delete Slices, or edit Slice models, use Slice Machine (more info below).

Learn more about how to edit your components with [Query Data with Gatsby](https://prismic.io/docs/technologies/query-gatsby) and [Template Content in Gatsby](https://prismic.io/docs/technologies/template-content-gatsby).

Styling in this project is implemented with Tailwind CSS. See the [Tailwind docs](https://tailwindcss.com/docs) for more info.

### Deploy to the web

To put your project online, see [Deploy your Gatsby App](https://prismic.io/docs/technologies/deploy-gatsby).

### Edit content models with Slice Machine

This project includes an application called Slice Machine, which generates models for your Custom Types and Slices. Slice Machine stores the models locally in your codebase, so you can save and version them. It also syncs your models to Prismic. To learn how to use Slice Machine, read [What is Slice Machine?](https://prismic.io/docs/technologies/slice-machine).

If you change or add to your Custom Types, you'll need to update your route handling to match. To learn how to do that, read [Define Routes with Gatsby](https://prismic.io/docs/technologies/define-routes-gatsby).

## Learn more

For the official Prismic documentation, see [Prismic's guide for Gatsby](https://prismic.io/docs/technologies/gatsby) or the [technical references for the installed Prismic packages](https://prismic.io/docs/technologies/technical-references).

[prismic]: https://prismic.io/
[prismic-docs]: https://prismic.io/docs/technologies/gatsby
[prismic-sign-up]: https://prismic.io/dashboard/signup
[gatsby]: https://gatsby.org/
[live-demo]: https://gatsby-starter-prismic-blog.vercel.app/
