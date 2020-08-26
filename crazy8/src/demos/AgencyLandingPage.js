import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Hero from "components/hero/BackgroundAsImage.js";
import Features from "components/features/DashedBorderSixFeatures";
import MainFeature from "components/features/TwoColSingleFeatureWithStats2.js";
import MainFeature2 from "components/features/TwoColWithTwoFeaturesAndButtons.js";
// import Portfolio from "components/cards/PortfolioTwoCardsWithImage.js";
import Blog from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
// import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import Pricing from "components/pricing/TwoPlansWithDurationSwitcher";
import PricingLength from "components/pricing/TwoPlansWithDurationSwitcherTime";
import FAQ from "components/faqs/SimpleWithSideImage.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import macball from "images/macball.svg";

export default () => (
  <AnimationRevealPage>
    <Hero />
    <MainFeature />
    <Features />
    <MainFeature2 />
    <Pricing />
    <PricingLength />
    <FAQ
      imageSrc={macball}
      imageContain={true}
      imageShadow={false}
      subheading="FAQ"
      heading={
        <>
          Have any <span style={{color: "#0F5AD1"}}>Questions ?</span>
        </>
      }
    />
    <ContactUsForm />
    <Footer />
  </AnimationRevealPage>
);
