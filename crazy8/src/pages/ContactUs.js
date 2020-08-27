import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Header from "components/headers/light";
import Top from "components/forms/TwoColContactUsWithIllustrationFullForm";
import Footer from "components/footers/MiniCenteredFooter";

export default () => {

    return (

    <AnimationRevealPage>
    
        <Header />
        <Top />
        <Footer />
    
    </AnimationRevealPage>

    )
}