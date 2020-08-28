import React, {useState} from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light";
import Color from "components/forms/JumpstartInputs1";
import Brand from "components/forms/JumpstartInputs2";
import Upload from "components/forms/JumpstartInputs3";
import Footer from "components/footers/MiniCenteredFooter";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight text-blue-600`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;
const HeaderContainer = tw.div`mt-10 w-full flex flex-col items-center`;


export default () => {

    const [jumpstart, setJumpstart] = useState({
      colors: "",
      scheme: "",
      blacklistColors: "",
      content: "",
      brandName: "",
      brandSlogan: "",
      brandDescription: "",
      logoLink: "",
      addedContent: "",
      comments: "";
      extra: "",
    })

    const handleChange = (e) => {
      e.preventDefault();
    }

    return (

    <AnimationRevealPage>
    
        <Header />
        <HeaderContainer>
            <Subheading><span style={{color: "#9964d1"}}>Step</span><span style={{color: "#7a1be0"}}> 3</span></Subheading>
            <Heading style={{color: "#9964d1"}}>Build your <span style={{color: "#7a1be0"}}>JumpStart</span> Package</Heading>
            <Description style={{color: "#31075e"}}>Envision what you want your online presence to feel like, and tell us everything!  This helps us make your vision a reality!</Description>
        </HeaderContainer>
        <Color />
        <Upload />
        <Brand />
        <Footer />
    
    </AnimationRevealPage>

    )
}