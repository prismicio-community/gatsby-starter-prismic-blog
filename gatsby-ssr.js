import "./src/global.css";

export { wrapRootElement } from "./src/wrapRootElement";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="google-fonts.googleapis.com-preconnect"
      rel="preconnect"
      href="https://fonts.googleapis.com"
    />,
    <link
      key="google-fonts.gstatic.com-preconnect"
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="true"
    />,
    <link
      key="google-fonts"
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
      rel="stylesheet"
    />,
  ]);
};
