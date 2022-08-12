exports.createPages = ({ actions }) => {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: "/articles",
    toPath: "/",
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath: "/articles/",
    toPath: "/",
    redirectInBrowser: true,
  });
};
