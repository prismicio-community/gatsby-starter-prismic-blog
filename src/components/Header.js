import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { GatsbyImage } from "gatsby-plugin-image";

import { useNavigation } from "../hooks/useNavigation";
import { useSettings } from "../hooks/useSettings";

import { Bounded } from "./Bounded";
import { Heading } from "./Heading";
import { HorizontalDivider } from "./HorizontalDivider";

const Profile = ({ name, description, profilePictureImageData }) => {
  return (
    <div className="px-4">
      <div className="grid max-w-lg grid-cols-1 justify-items-center gap-8">
        <PrismicLink href="/" tabIndex="-1">
          <div className="relative h-40 w-40 overflow-hidden rounded-full bg-slate-300">
            {profilePictureImageData && (
              <GatsbyImage
                image={profilePictureImageData}
                layout="fullWidth"
                className="object-cover"
              />
            )}
          </div>
        </PrismicLink>
        {(prismicH.isFilled.richText(name) ||
          prismicH.isFilled.richText(description)) && (
          <div className="grid grid-cols-1 gap-2 text-center">
            {prismicH.isFilled.richText(name) && (
              <Heading>
                <PrismicLink href="/">
                  <PrismicText field={name} />
                </PrismicLink>
              </Heading>
            )}
            {prismicH.isFilled.richText(description) && (
              <p className="font-serif text-2xl italic leading-normal tracking-tight text-slate-500">
                <PrismicText field={description} />
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const NavItem = ({ children }) => {
  return (
    <li className="font-semibold tracking-tight text-slate-800">{children}</li>
  );
};

export const Header = ({ withDivider = true, withProfile = true }) => {
  const navigation = useNavigation();
  const settings = useSettings();

  return (
    <Bounded as="header">
      <div className="grid grid-cols-1 justify-items-center gap-20">
        <nav>
          <ul className="flex flex-wrap justify-center gap-10">
            <NavItem>
              <PrismicLink href="/">
                {navigation.homepageLabel.text}
              </PrismicLink>
            </NavItem>
            {navigation?.links.map((item) => (
              <NavItem key={item.label.text}>
                <PrismicLink href={item.link.url}>
                  {item.label.text}
                </PrismicLink>
              </NavItem>
            ))}
          </ul>
        </nav>
        {withProfile && (
          <Profile
            name={settings.name.richText}
            description={settings.description.richText}
            profilePictureImageData={settings.profilePicture.gatsbyImageData}
          />
        )}
        {withDivider && <HorizontalDivider />}
      </div>
    </Bounded>
  );
};
