import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "functions/AnimationRevealPage.js";

import Header from "components/headers/headerInnerPages";
import Top from "components/contactus/ContactUsForm";
import Footer from "components/footers/MainFooter";

export default () => {

    return (

    <AnimationRevealPage>
    
        <Header />
        <Top />
        <Footer />
    
    </AnimationRevealPage>

    )
}