import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "functions/AnimationRevealPage.js";

import Hero from "components/start/LandingTop.js";
import Features from "components/brokenUpComps/SixFeaturedHome";
import MainFeature from "components/brokenUpComps/MainFeature.js";
import MainFeature2 from "components/brokenUpComps/ColIcons.js";
import Blog from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
import Pricing from "components/pricing/TwoPlansWithDurationSwitcher";
import PricingLength from "components/pricing/TwoPlansWithDurationSwitcherTime";
import FAQ from "components/faq/SimpleWithSideImage.js";
import GetStarted from "components/getStarted/GetStarted";
import Footer from "components/footers/MainFooter.js";
import macball from "images/macball.svg";
import Newsletter from "components/newsletter/Newsletter";

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
