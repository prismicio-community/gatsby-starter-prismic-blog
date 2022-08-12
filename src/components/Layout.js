import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({
  withHeaderDivider,
  withProfile,
  withSignUpForm,
  children,
}) => {
  return (
    <div className="text-slate-700">
      <Header withProfile={withProfile} withDivider={withHeaderDivider} />
      <main>{children}</main>
      <Footer withSignUpForm={withSignUpForm} />
    </div>
  );
};
