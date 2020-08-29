import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
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
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight text-blue-600`;

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        subheading={<Subheading>About Cyphen</Subheading>}
        heading="We are a modern development agency."
        description="Our goal is to make you feel as secure and stress-free as you can from the web-development side of your business.  Not only do we provide clean code, but also coaching and support months ex post facto to ensure your success.  This ranges from web-development support to financial planning to marketing consultation."
        buttonRounded={false}
        primaryButtonText="See Our Work"
        imageSrc="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
      />
      <MainFeature1
        subheading={<Subheading>Our Mission</Subheading>}
        heading="We'll bring your vision to reality."
        buttonRounded={false}
        primaryButtonText="Order Now"
        imageSrc="https://images.unsplash.com/photo-1590402494811-8ffd29f17543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
        textOnLeft={false}
      />
      <Features
        subheading={<Subheading>Our Values</Subheading>}
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
      <TeamCardGrid 
        subheading={<Subheading>Our Dedicated Team</Subheading>}
      />
      <Newsletter />
      <Footer />
    </AnimationRevealPage>
  );
};
