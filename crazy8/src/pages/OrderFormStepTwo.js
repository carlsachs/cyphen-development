import React from "react";
import AnimationRevealPage from "functions/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/headerNoOrder.js";
import Footer from "components/footers/MainFooter.js";
import Plans from "components/pricing/Extras.js";

const Subheading = tw.span`uppercase tracking-wider text-sm`;

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <Plans />
      <Footer />
    </AnimationRevealPage>
  );
};
