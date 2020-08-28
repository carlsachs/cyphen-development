import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import Header from "components/headers/light";

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight text-blue-600`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;
const HeaderContainer = tw.div`mt-10 w-full flex flex-col items-center`;
const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col lg:flex-row`;
const Input = tw.input`border-2 px-5 py-3 rounded focus:outline-none font-medium transition duration-300 hocus:border-primary-500`;

const SubmitButton = tw(PrimaryButtonBase)`inline-block lg:ml-6 mt-6 lg:mt-0`;

export default ({
    subheading = "Build Your",
    heading = "Jumpstart Package",
    description = "Give us every last detail about what you envision for your new website.  Contact us if you have further questions.",
    submitButtonText = "Continue",
    formAction = "#",
    formMethod = "get",
    textOnLeft = true,
  }) => {
    return(
    <Container>
    <Header />
        <HeaderContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>{heading}</Heading>
          {description && <Description>{description}</Description>}
        </HeaderContainer>
        <ContentWithPaddingXl>
            <Form style={{
              justifyContent: "center",
              border: "1px solid black"
            }}>
            <Container style={{
              width: "40%"
            }}>
            <div style={{
              display: "flex",
              flexDirection: "column",
              paddingTop: "3%"
            }}>
                <Input placeholder="Full Name" name="name" required />
            </div>
            <div style={{
              display: "flex",
              flexDirection: "column"
            }}>
                <Input placeholder="Email" name="email" type="email" required />
                <label style={{
                  display: "flex",
                  justifyContent: "center"
                }}>
                Preferred Contact Method
                <Input name="emethod" type="radio" />
              </label>
            </div>
            <div style={{
              display: "flex",
              flexDirection: "column"
            }}>
                <Input placeholder="Phone" name="phone" type="tel" required />
                <label style={{
                  display: "flex",
                  justifyContent: "center"
                }}>
                  Preferred Contact Method
                  <Input name="pmethod" type="radio" />
                </label>
            </div>
            <div style={{
              display: "flex",
              justifyContent: "center"
            }}>
                <SubmitButton type="submit">{submitButtonText}</SubmitButton>
            </div>
            </Container>
            </Form>
        </ContentWithPaddingXl>
    </Container>
    )
  }