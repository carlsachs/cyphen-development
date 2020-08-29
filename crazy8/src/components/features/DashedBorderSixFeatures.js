import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading } from "components/misc/Headings.js";

import defaultCardImage from "../../images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "../../images/svg-decorator-blob-3.svg";

import SupportIconImage from "../../images/support-icon.svg";
import ShieldIconImage from "../../images/shield-icon.svg";
import CustomizeIconImage from "../../images/customize-icon.svg";
import FastIconImage from "../../images/fast-icon.svg";
import ReliableIconImage from "../../images/reliable-icon.svg";
import ShopIconImage from "../../images/shop-icon.svg";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full text-blue-800`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-6 flex`}
`;

const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs items-center px-6 py-10 border-2 border-dashed border-blue-700 rounded-lg mt-12`}
  .imageContainer {
    ${tw`border-2 border-blue-500 text-center rounded-full p-6 flex-shrink-0 relative`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .textContainer {
    ${tw`mt-6 text-center`}
  }

  .title {
    ${tw`mt-2 font-bold text-xl leading-none text-blue-800`}
  }

  .description {
    ${tw`mt-3 font-semibold text-blue-500 text-sm leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default () => {

  const cards = [
    { imageSrc: ShopIconImage, 
      title: "Free Logo", 
      description: "With each order of our Boost Package and above, a quality, free, and attractive logo comes complementary to you." },
    {
      imageSrc: ShieldIconImage,
      title: "Secure",
      description: "We create and manage our servers in some of the most secure ways possible."
    },
    { imageSrc: SupportIconImage, 
      title: "24/7 Support", 
      description: "We provide 24/7 support for your team after purchase for the allocated time.  What is code without support?" },
    { imageSrc: CustomizeIconImage, 
      title: "Customized to You",
      description: "We pride ourselves on delivering a product that truly portrays the environment that you have created in your business." },
    { imageSrc: ReliableIconImage, 
      title: "Free Marketing", 
      description: "Each order comes complementary with free marketing on this site for the alloted time specified at purchase." },
    { imageSrc: FastIconImage, 
      title: "Fast Delivery", 
      description: "We take time and efficiency very seriously.  If we are working on a project, we are doing everything we can to produce that product in a timely and efficient manner." },
  ];

  return (
    <Container>
      <ThreeColumnContainer>
        <Heading>So, what makes us <span style={{color: "#0F5AD1"}}>different</span>?</Heading>
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud. Sic Semper Tyrannis. Neoas Calie artel."}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
