import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/basic/Headings.js";
import { SectionDescription } from "components/basic/Typography.js";
import { PrimaryButton as PrimaryButtonBase } from "components/basic/Buttons.js";
import { Container, ContentWithPaddingXl } from "components/basic/Layouts.js";
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
    ${tw`font-bold text-xl text-blue-800`}
  }
  .price {
    ${tw`font-bold text-4xl sm:text-5xl my-1 text-blue-500`}
  }
  .slash {
    ${tw`text-xl text-blue-800`}
  }
  .duration {
    ${tw`lowercase text-blue-400 font-medium tracking-widest`}
  }
  .mainFeature {
    ${tw`text-blue-600 text-sm font-medium tracking-wide`}
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
  plans = null,
  primaryButtonText = "Get Started",
  planDurations = [
    {
      text: "Job",
      switcherText: "Plans",
    }
  ]
}) => {

  let history = useHistory();

  const defaultPlans = [
    {
      name: "JumpStart",
      durationPrices: ["$199", "$199"],
      mainFeature: "1 Day Delivery",
      features: ["1 Page", "Full Source Code", "Content Upload", "1 Month Free Support", "1 Form Max"],
      featured: false
    },
    {
      name: "Boost",
      durationPrices: ["$799", "$799"],
      mainFeature: "3 Day Delivery",
      features: ["5 Pages", "Full Source Code", "Free Logo", "Custom Graphics", "Content Upload", "3 Months Free Support", "Unlimited Forms"],
      featured: false
    },
    {
      name: "Throttle",
      durationPrices: ["$2149", "$2149"],
      mainFeature: "7 Day Delivery",
      features: ["15 Pages", "Cyphen Admin Dashboard", "Full Source Code", "Free Business Animated Video", "Free Logo", "Custom Graphics", "Content Upload", "1 Year Dev Support"],
      featured: true
    }
  ];

  if (!plans) plans = defaultPlans;

  const [activeDurationIndex, setActiveDurationIndex] = useState(0);

  return (
    <Container>
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
                <BuyNowButton onClick={() => history.push("/register")}>{primaryButtonText}</BuyNowButton>
              </PlanAction>
            </Plan>
          ))}
        </PlansContainer>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
