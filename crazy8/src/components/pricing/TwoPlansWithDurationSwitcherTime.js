import React, {useState} from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-6.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";

const HeaderContainer = tw.div`w-full flex flex-col items-center`;
const Subheading = tw(SubheadingBase)`mb-4 text-blue-500`;
const Heading = tw(SectionHeading)`w-full text-blue-700`;
const Description = tw(SectionDescription)`w-full text-center text-blue-400`;

const PlanDurationSwitcher = tw.div`block w-full max-w-xs sm:inline-block sm:w-auto border-2 rounded-full px-1 py-1 mt-8`;
const SwitchButton = styled.button`
  ${tw`w-1/2 sm:w-32 px-4 sm:px-8 py-3 rounded-full focus:outline-none text-sm font-bold text-blue-500 transition duration-300`}
  ${props => props.active && tw`bg-blue-700 text-blue-100`}
`;

const PlansContainer = tw.div`flex justify-center flex-col md:flex-row items-center md:items-start relative`;
const Plan = styled.div`
  ${tw`w-full max-w-72 mt-16 md:mr-12 md:last:mr-0 text-center px-8 rounded-lg relative text-gray-900 bg-white flex flex-col shadow-raised`}

  ${props =>
    props.featured &&
    css`
      ${tw`border-2 border-gray-200 shadow-none`}
    `}
`;

const PlanHeader = styled.div`
  ${tw`flex flex-col leading-relaxed py-8 -mx-8 bg-gray-100 rounded-t-lg`}
  .name {
    ${tw`font-bold text-xl`}
  }
  .price {
    ${tw`font-bold text-4xl sm:text-5xl my-1`}
  }
  .slash {
    ${tw`text-xl text-gray-500`}
  }
  .duration {
    ${tw`lowercase text-gray-500 font-medium tracking-widest`}
  }
  .mainFeature {
    ${tw`text-gray-500 text-sm font-medium tracking-wide`}
  }
`;
const PlanFeatures = styled.div`
  ${tw`flex flex-col -mx-8 px-8 py-8 flex-1 text-sm`}
  .feature {
    ${tw`mt-5 first:mt-0 font-semibold text-gray-500`}
  }
`;

const PlanAction = tw.div`px-4 pb-8`;
const BuyNowButton = styled(PrimaryButtonBase)`
  ${tw`rounded-full tracking-wider py-4 w-full text-sm hover:shadow-xl transform hocus:translate-x-px hocus:-translate-y-px focus:shadow-outline bg-blue-700 text-blue-100 hocus:bg-blue-400 hocus:text-blue-700`}
`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-64 w-64 opacity-25 transform -translate-x-2/3 -translate-y-1/2`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-25 transform translate-x-2/3 translate-y-1/2 fill-current text-teal-300`}
`;

export default ({
  subheading = "Time-Based Plan Pricing",
  heading = "Ex Post Facto Plans",
  description = "We belive that just passing you source code and calling it good is criminal.  We provide two packages, based on length of support and marketing after-the-fact.",
  plans = null,
  primaryButtonText = "Add To Cart",
  planDurations = [
    {
      text: "Month",
      switcherText: "Monthly",
    },
    {
      text: "Year",
      switcherText: "Yearly",
    }
  ]
}) => {
  const defaultPlans = [
    {
        name: "Support",
        durationPrices: ["$99", "$899"],
        mainFeature: "Monthly Developer Support",
        features: ["3 Revisions Per Month", "Code Updating", "Add 1 Page/Mo 50% OFF", "24/7 Assistance", "Unlimited Questions", "YEARLY: Unlimited:", "Revisions"],
        featured: true
    },
    {
      name: "Marketing",
      durationPrices: ["$899", "$8599"],
      mainFeature: "Monthly Marketing",
      features: ["Facebook Advertising", "Instagram Advertisements", "SEO Marketing", "24/7 Assistance"]
    }
  ];

  if (!plans) plans = defaultPlans;

  const [activeDurationIndex, setActiveDurationIndex] = useState(0);

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading style={{color: "#0F5AD1"}}>{heading}</Heading>
          {description && <Description>{description}</Description>}
        <PlanDurationSwitcher>
          {planDurations.map((planDuration, index) => (
            <SwitchButton active={activeDurationIndex === index} key={index} onClick={() => setActiveDurationIndex(index)}>{planDuration.switcherText}</SwitchButton>
          ))}
        </PlanDurationSwitcher>
        </HeaderContainer>
        <PlansContainer>
          {plans.map((plan, index) => (
            <Plan key={index} featured={plan.featured}>
              <PlanHeader>
                <span className="priceAndDuration">
                  <span className="price">{plan.durationPrices[activeDurationIndex]}</span>
                  <span className="slash"> / </span>
                  <span className="duration">{planDurations[activeDurationIndex].text}</span>
                </span>
                <span className="name">{plan.name}</span>
                <span className="mainFeature">{plan.mainFeature}</span>
              </PlanHeader>
              <PlanFeatures>
                {plan.features.map((feature, index) => (
                  <span key={index} className="feature">
                    {feature}
                  </span>
                ))}
              </PlanFeatures>
              <PlanAction>
                <BuyNowButton>{primaryButtonText}</BuyNowButton>
              </PlanAction>
            </Plan>
          ))}
        </PlansContainer>
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
