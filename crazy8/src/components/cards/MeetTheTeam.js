import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Container, ContentWithPaddingXl } from "components/basic/Layouts.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/basic/Headings";
import {SectionDescription} from "components/basic/Typography";
import { ReactComponent as TwitterIcon} from "images/twitter-icon.svg";
import { ReactComponent as LinkedinIcon} from "images/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "images/github-icon.svg";
import { ReactComponent as FacebookIcon } from "images/facebook-icon.svg";

import Carl from "../../images/profile.jpg";
import Will from "../../images/Professional.jpg"

const HeadingContainer = tw.div``
const Heading = tw(SectionHeading)`text-blue-800`
const Subheading = tw(SubheadingBase)`text-center mb-3 text-blue-500`
const Description = tw(SectionDescription)`mx-auto text-center text-blue-600`

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`
const Card = tw.div`mt-24 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center`
const CardImage = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`w-64 h-64 bg-contain bg-center rounded`}
`
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6`}
  .position {
    ${tw`uppercase font-bold tracking-widest text-xs text-primary-500`}
  }
  .name {
    ${tw`mt-1 text-xl font-medium text-blue-800`}
  9
`

const CardLinks = styled.div`
  ${tw`mt-6 flex`}
  .link {
    ${tw`mr-8 last:mr-0 text-gray-400 hocus:text-primary-500 transition duration-300`}
    .icon {
      ${tw`fill-current w-6 h-6`}
    }
  }
`

export default ({
  heading = "Meet The Crew.",
  subheading = "Our Team",
  description = "A group of highly-dedicated, educated, and reliable members who think outside of the box 110% of the time.",
  cards = [
    {
      imageSrc: Carl,
      position: "Co-Founder / Dev",
      name: "Carl Sachs",
      links: [
        {
          url: "https://twitter.com/CarltonSachs",
          icon: TwitterIcon,
        },
        {
          url: "https://www.linkedin.com/in/carl-sachs/",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com/carlsachs",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: Will,
      position: "Co-Founder / Dev",
      name: "Will Ryan",
      links: [
        {
          url: "https://www.facebook.com/billythecid/",
          icon: FacebookIcon,
        },
        {
          url: "https://www.linkedin.com/in/william-ryan-34a1981a1/",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com/William-Ryan",
          icon: GithubIcon,
        },
      ],
    },
    // {
    //   imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=2.95&w=512&h=512&q=80",
    //   position: "Financial Advisor",
    //   name: "Kirsten Wolfe",
    //   links: [
    //     {
    //       url: "https://twitter.com",
    //       icon: TwitterIcon,
    //     },
    //     {
    //       url: "https://linkedin.com",
    //       icon: LinkedinIcon,
    //     },
    //     {
    //       url: "https://github.com",
    //       icon: GithubIcon,
    //     },
    //   ],
    // }
  ]
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          {heading && <Heading>{heading}</Heading> }
          {description && <Description>{description}</Description> }
        </HeadingContainer>
        <Cards>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} style={{backgroundSize: "cover"}} />
              <CardContent>
                <span className="position">{card.position}</span>
                <span className="name">{card.name}</span>
                <CardLinks>
                  {card.links.map((link, linkIndex) => (
                    <a key={linkIndex} className="link" href={link.url}>
                      <link.icon className="icon" />
                    </a>
                  ))}
                </CardLinks>
              </CardContent>
            </Card>
          ))}
        </Cards>
      </ContentWithPaddingXl>
    </Container>
  );
};
