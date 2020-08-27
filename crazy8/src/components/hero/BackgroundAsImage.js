import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import Header, { NavLink, NavLinks, PrimaryLink, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";
import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-blue-500 hover:text-blue-200`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
  background-image: url("https://images.unsplash.com/photo-1462899006636-339e08d1844e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-blue-300 opacity-25`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;
const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;

const Heading = styled.h1`
  ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-blue-100 leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const SlantedBackground = styled.span`
  ${tw`relative text-blue-200 px-4 -mx-4 py-2`}
  &::before {
    content: "";
    ${tw`absolute inset-0 bg-blue-800 transform -skew-x-12 -z-10`}
  }
`;

const Notification = tw.span`inline-block my-4 pl-3 py-1 text-gray-100 border-l-4 border-blue-500 font-medium text-sm`;

const PrimaryAction = tw.button`px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-blue-100 text-blue-500 font-bold rounded shadow transition duration-300 hocus:bg-blue-800 hocus:text-blue-100 focus:shadow-outline`;

const StyledResponsiveVideoEmbed = styled(ResponsiveVideoEmbed)`
  padding-bottom: 56.25% !important;
  padding-top: 0px !important;
  ${tw`rounded`}
  iframe {
    ${tw`rounded bg-black shadow-xl`}
  }
`;

export default () => {

  const handleClick2 = () => {
    scroller.scrollTo('social', {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: 100, // Scrolls to element + 100 pixels down the page
    })
  }

  const handleClick3 = () => {
    scroller.scrollTo('consultation', {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: 430, // Scrolls to element + 100 pixels down the page
    })
  }

  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="/team">
        Team
      </NavLink>
      <NavLink href="#">
        Work
      </NavLink>
      <NavLink href="/pricing">
        Pricing
      </NavLink>
      <NavLink onClick={handleClick3} style={{cursor: "pointer"}}>
        Consultation
      </NavLink>
      <NavLink onClick={handleClick2} style={{cursor: "pointer"}}>
        Social
      </NavLink>
      <NavLink href="/contact">
        Contact Us
    </NavLink>
    </NavLinks>,
    <NavLinks key={2} style={{display: "flex", justifyContent: "space-evenly", width: "25%"}}>
    <PrimaryLink href="/adminlogin">
        Place Order
      </PrimaryLink>
    </NavLinks>
  ];

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <TwoColumn>
          <LeftColumn>
            <Notification>We have now launched operations!</Notification>
            <Heading>
              <span>A Professional Look</span>
              <br />
              <SlantedBackground>You Deserve</SlantedBackground>
            </Heading>
            <PrimaryAction onClick={() => window.open("/pricing")}>Get Pricing</PrimaryAction>
          </LeftColumn>
          <RightColumn>
            <StyledResponsiveVideoEmbed
              url="https://www.youtube.com/embed/ZFd7jVc7x2g"
              background="transparent"
            />
          </RightColumn>
        </TwoColumn>
      </HeroContainer>
    </Container>
  );
};
