import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import MainFeature1 from "components/features/TwoColWithButton.js";

import Newsletter from "components/forms/SimpleSubscribeNewsletter";

import Features from "components/features/ThreeColSimple.js";
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
        subheading={<Subheading>Packages</Subheading>}
        heading="The Blood of our Agency."
        description="Without following these core values, we would not be able to efficiently deliver the stellar services as we do now."
        cards={[
          {
            imageSrc: SupportIconImage,
            title: "Reliability",
            description: "As a client, you will rely on us for 24/7 support for any needs you or your business may have."
          },
          {
            imageSrc: ShieldIconImage,
            title: "Security",
            description: "Technology is advancing quickly.  It is important to us to keep all data and customer information safe on your site.  We stay consistently up-to-date on industry releases."
          },
          {
            imageSrc: Fast,
            title: "Efficiency",
            description: "Anyone can create a website, but a web application that looks great, feels great, runs smooth, and is accessible?  Makes all the difference in the world.  We pride outselves on this."
          },
        ]}
        linkText=""
      />
      <Footer />
    </AnimationRevealPage>
  );
};
