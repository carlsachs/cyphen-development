import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Hero from "components/hero/BackgroundAsImage.js";
import Features from "components/features/DashedBorderSixFeatures";
import MainFeature from "components/features/TwoColSingleFeatureWithStats2.js";
import MainFeature2 from "components/features/TwoColWithTwoFeaturesAndButtons.js";
import Blog from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
import Pricing from "components/pricing/TwoPlansWithDurationSwitcher";
import PricingLength from "components/pricing/TwoPlansWithDurationSwitcherTime";
import FAQ from "components/faqs/SimpleWithSideImage.js";
import GetStarted from "components/cta/GetStarted";
import Footer from "components/footers/MiniCenteredFooter.js";
import macball from "images/macball.svg";
import Newsletter from "components/forms/SimpleSubscribeNewsletter";

import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default () => (
  <AnimationRevealPage>
    <Hero />
    <MainFeature />
    <Features />
    <MainFeature2 />
    <Element name="pricing">
      <Pricing />
    </Element>
    <Element name="consultation">
      <PricingLength />
    </Element>
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
    <GetStarted />
    <Newsletter />
    <Element name="social">
      <Footer />
    </Element>
  </AnimationRevealPage>
);
