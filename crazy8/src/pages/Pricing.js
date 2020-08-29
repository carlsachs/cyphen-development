import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/lightInner.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import Pricing from "components/pricing/TwoPlansWithDurationSwitcher2";
import PricingLength from "components/pricing/TwoPlansWithDurationSwitcherTime2";
import Features from "components/features/ThreeColSimple.js";
import Features2 from "components/features/ThreeColSimple2.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import Fast from "images/fast-icon.svg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <Features
        subheading={<Subheading>Pricing</Subheading>}
        heading="Three Core Packages"
        description="Our web development services come in three core packages, with additional services, support, and features available upon request.  If you don't see something you need, message us!"
        cards={[
          {
            imageSrc: SupportIconImage,
            title: "Jumpstart",
            description: "A package perfect for a startup on a budget but looking to create a professional and trustworthy web presence."
          },
          {
            imageSrc: ShieldIconImage,
            title: "Boost",
            description: "Take advantage of a multiple-page layout to create a complex web app attracting your target audience to your ideas."
          },
          {
            imageSrc: Fast,
            title: "Throttle",
            description: "Use CyphenBoard to manage and track user data, business operations, and future tasks all in one interface.  Great for e-commerce and SAAS."
          },
        ]}
        linkText=""
      />
      <Pricing />
      <Features2 
        subheading={<Subheading>Ex Post Facto</Subheading>}
        heading="Additional Services"
        description="Aside from web development, we offer additional services to help you reach your business goals.  If you don't see a service or feature you need, message us!"
        cards={[
          {
            imageSrc: SupportIconImage,
            title: "Jumpstart",
            description: "A package perfect for a startup on a budget but looking to create a professional and trustworthy web presence."
          },
          {
            imageSrc: ShieldIconImage,
            title: "Boost",
            description: "Take advantage of a multiple-page layout to create a complex web app attracting your target audience to your ideas."
          },
          {
            imageSrc: Fast,
            title: "Throttle",
            description: "Use CyphenBoard to manage and track user data, business operations, and future tasks all in one interface.  Great for e-commerce and SAAS."
          },
        ]}
        linkText=""
      />
      <PricingLength />
      <Footer />
    </AnimationRevealPage>
  );
};
