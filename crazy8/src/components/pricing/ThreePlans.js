import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { ReactComponent as SvgDecoratorBlob } from "images/svg-decorator-blob-6.svg";

const HeaderContainer = tw.div`mt-10 w-full flex flex-col items-center`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full text-blue-700`;
const Description = tw(SectionDescription)`w-full text-center text-blue-600`;

const PlansContainer = tw.div`flex justify-between flex-col lg:flex-row items-center lg:items-stretch relative`;
const Plan = styled.div`
  ${tw`w-full max-w-sm mt-16 lg:mr-8 lg:last:mr-0 text-center px-8 rounded-lg shadow relative pt-2 text-gray-900 bg-white flex flex-col`}
  .planHighlight {
    ${tw`rounded-t-lg absolute top-0 inset-x-0 h-2`}
  }

  ${props =>
    props.featured &&
    css`
    background: rgb(25,27,108);
    background: linear-gradient(90deg, rgba(25,27,108,0.8785889355742297) 0%, rgba(96,33,186,0.7805497198879552) 100%);
    background: rgb(25,27,108);
    background: linear-gradient(90deg, rgba(25,27,108,0.8785889355742297) 0%, rgba(96,33,186,0.7805497198879552) 100%);
    background: rgb(25,27,108);
    background: linear-gradient(90deg, rgba(25,27,108,0.8785889355742297) 0%, rgba(96,33,186,0.7805497198879552) 100%);
      ${tw`bg-primary-500 text-gray-100`}
      .planHighlight {
        ${tw`hidden`}
      }
      .duration {
        ${tw`text-gray-200!`}
      }
      ${PlanFeatures} {
        ${tw`border-indigo-500`}
      }
      .feature:not(.mainFeature) {
        ${tw`text-gray-300!`}
      }
      ${BuyNowButton} {
        ${tw`bg-gray-100 text-primary-500 hocus:bg-gray-300 hocus:text-primary-800`}
    `}
`;

const PlanHeader = styled.div`
  ${tw`flex flex-col uppercase leading-relaxed py-8`}
  .name {
    ${tw`font-bold text-xl`}
  }
  .price {
    ${tw`font-bold text-4xl sm:text-5xl my-1`}
  }
  .duration {
    ${tw`text-gray-500 font-bold tracking-widest`}
  }
`;
const PlanFeatures = styled.div`
  ${tw`flex flex-col -mx-8 px-8 py-8 border-t-2 border-b-2 flex-1`}
  .feature {
    ${tw`mt-5 first:mt-0 font-medium`}
    &:not(.mainFeature) {
      ${tw`text-gray-600`}
    }
  }
  .mainFeature {
    ${tw`text-xl font-bold tracking-wide`}
  }
`;

const PlanAction = tw.div`px-4 sm:px-8 xl:px-16 py-8`;
const BuyNowButton = styled(PrimaryButtonBase)`
  ${tw`rounded-full uppercase tracking-wider py-4 w-full text-sm hover:shadow-xl transform hocus:translate-x-px hocus:-translate-y-px focus:shadow-outline`}
`;

const DecoratorBlob = styled(SvgDecoratorBlob)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-64 w-64 opacity-25 transform -translate-x-1/2 translate-y-1/2`}
`;


export default ({
  subheading = "Step One",
  heading = "Choose Your Core Plan",
  description = "",
  plans = null,
  primaryButtonText = "Select"
}) => {

  const defaultPlans = [
    {
      name: "Jumpstart",
      price: "$199",
      duration: "Base Fee",
      mainFeature: "Suited for Single-Page Apps",
      features: ["1 Page", "1 Form", "Content Upload", "1 Month Free Dev Support"],
      url: "/jumpstart"
      
    },
    {
      name: "Throttle",
      price: "$1249",
      duration: "Base Fee",
      mainFeature: "Suited for Complex Websites",
      features: ["15 Pages", "CyphenBoard", "Free Logo/Graphics", "Free 30s Business Animated Video"],
      featured: true,
      url: "/additional"
    },
    {
      name: "Boost",
      price: "$575",
      duration: "Base Fee",
      mainFeature: "Suited for Startups",
      features: ["5 Pages", "Free Logo/Graphics", "Unlimited Forms", "3 Months Dev Support"],
      url: "/additional"
    },
  ];

  if (!plans) plans = defaultPlans;

  const highlightGradientsCss = [
    css`
      background: rgb(173,142,221);
      background: linear-gradient(90deg, rgba(173,142,221,0.8785889355742297) 0%, rgba(117,33,186,0.7805497198879552) 100%);
    `,
    css`
      background: rgb(32,0,82);
      background: linear-gradient(90deg, rgba(32,0,82,1) 0%, rgba(169,66,255,1) 100%);
    `,
    css`
      background: rgb(25,27,108);
      background: linear-gradient(90deg, rgba(25,27,108,0.8785889355742297) 0%, rgba(33,138,186,0.7805497198879552) 100%);
    `
  ];

  const history = useHistory();

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>{heading}</Heading>
          {description && <Description>{description}</Description>}
        </HeaderContainer>
        <PlansContainer>
          {plans.map((plan, index) => (
            <Plan key={index} featured={plan.featured}>
              {!plan.featured && <div className="planHighlight" css={highlightGradientsCss[index % highlightGradientsCss.length]} />}
              <PlanHeader>
                <span className="name">{plan.name}</span>
                <span className="price">{plan.price}</span>
                <span className="duration">{plan.duration}</span>
              </PlanHeader>
              <PlanFeatures>
                <span className="feature mainFeature">{plan.mainFeature}</span>
                {plan.features.map((feature, index) => (
                  <span key={index} className="feature">
                    {feature}
                  </span>
                ))}
              </PlanFeatures>
              <PlanAction>
                <BuyNowButton onClick={() => history.push(plan.url)} css={!plan.featured && highlightGradientsCss[index]}>{primaryButtonText}</BuyNowButton>
              </PlanAction>
            </Plan>
          ))}
          <DecoratorBlob/>
        </PlansContainer>
      </ContentWithPaddingXl>
      
    </Container>
  );
};
