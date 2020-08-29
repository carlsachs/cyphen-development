import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {Container as ContainerBase } from "components/misc/Layouts.js"
import logo from "../../images/logoGreen.png";
import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../../images/twitter-icon.svg";
import { ReactComponent as LinkedinIcon } from "../../images/linkedin-icon.svg";
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



const Container = tw(ContainerBase)`bg-gray-900 text-gray-100 -mx-8 -mb-8`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider text-green-500 hocus:text-green-200`;

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`
const Link = tw.a`border-b-2 border-transparent hocus:text-green-200 hocus:border-green-500 pb-1 transition duration-300 mt-2 mx-4 text-green-500`;

const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-green-100 hover:text-green-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

export const NavLink = tw.a`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-green-500 hocus:text-green-500
`;

export const PrimaryLink = tw(NavLink)`
  lg:mx-0
  px-8 py-3 rounded bg-green-700 text-green-100
  hocus:bg-green-500 hocus:text-white focus:shadow-outline
  border-b-0
`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`
export default (roundedHeaderButton = false) => {

  const handleClick = () => {
    scroller.scrollTo('pricing', {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: 430, // Scrolls to element + 100 pixels down the page
    })
  }

  const handleClick2 = () => {
    scroller.scrollTo('consultation', {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: 430, // Scrolls to element + 100 pixels down the page
    })
  }


  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            <LogoImg src={logo} />
            <LogoText onClick="#order">Cyphen</LogoText>
          </LogoContainer>
          <LinksContainer>
            <Link href="/">Home</Link>
            <Link href="/team">Team</Link>
            <Link href="#">Work</Link>
            <Link href="#">Pricing</Link>
            <Link href="#">Consultation</Link>
            <Link href="/contact">Contact Us</Link>
          </LinksContainer>
          <SocialLinksContainer>
            <SocialLink href="https://facebook.com">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://twitter.com">
              <TwitterIcon />
            </SocialLink>
            <SocialLink href="https://linkedin.com">
              <LinkedinIcon />
            </SocialLink>
          </SocialLinksContainer>
          <CopyrightText>
            &copy; Copyright 2020, Cyphen Development. All Rights Reserved.
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
};
