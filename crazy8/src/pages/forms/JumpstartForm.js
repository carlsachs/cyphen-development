import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light";
import Top from "components/forms/JumpstartInputs1";
import Footer from "components/footers/MiniCenteredFooter";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight text-blue-600`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;
const HeaderContainer = tw.div`mt-10 w-full flex flex-col items-center`;


export default () => {

    return (

    <AnimationRevealPage>
    
        <Header />
        <HeaderContainer>
            <Subheading>Build Your</Subheading>
            <Heading>Jumpstart Package</Heading>
            <Description>Envision what you want your online presence to feel like, and tell us everything!  This helps us make your vision a reality!</Description>
        </HeaderContainer>
        <Top />
        <Footer />
    
    </AnimationRevealPage>

    )
}