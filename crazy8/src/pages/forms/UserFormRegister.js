import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "functions/AnimationRevealPage.js";
import Header from "components/headers/headerNoOrder";
import Top from "pages/forms/UserInputsRegister";
import Footer from "components/footers/MainFooter";
import { SectionHeading, Subheading as SubheadingBase } from "components/basic/Headings.js";

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight text-blue-600`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;
const HeaderContainer = tw.div`mt-10 w-full flex flex-col items-center`;


export default () => {

    return (

    <AnimationRevealPage>
    
        <Header />
        <HeaderContainer>
            <Subheading>Step 1</Subheading>
            <Heading>Register</Heading>
            <Description>Your data is secure, will not be shared with anyone, and is solely for the purpose of getting to know you and tracking your order!</Description>
        </HeaderContainer>
        <Top />
        <Footer />
    
    </AnimationRevealPage>

    )
}