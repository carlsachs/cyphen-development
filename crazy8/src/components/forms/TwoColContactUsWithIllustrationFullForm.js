import React, { useState, useHistory } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import EmailIllustrationSrc from "images/email-illustration.svg";

import axios from "axios";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left text-blue-800`;

const Subheading = tw(SubheadingBase)`text-center md:text-left text-blue-500`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight text-blue-800`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-blue-600`

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-blue-500`
const Textarea = styled(Input).attrs({as: "textarea"})`
  ${tw`h-24`}
`

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`

export default ({
  subheading = "Get in Touch",
  heading = <>Want to <span style={{color: "#0F5AD1"}}>reach out</span><wbr/> ?</>,
  description = "Whether a question, inquiry, concern, or just to say 'Hello', feel free to reach out and our team will respond promptly.",
  submitButtonText = "Send",
  formAction = "#",
  formMethod = "get",
  textOnLeft = true,
}) => {


  const [submission, setSubmission] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })

  const handleChange = (e) => {
    e.preventDefault();
    setSubmission({
      ...submission,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`https://cyphen-main.herokuapp.com/api/form/contact`, submission)
    .then(res => {
      alert("Thanks for the interest!  Our team will get back to you shortly")
    })
    .catch(err => {
      console.log(err)
      alert("Sorry! Please try again or email us: sachscarl@gmail.com")
    })
  }


  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={EmailIllustrationSrc} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
            <Form onSubmit={handleSubmit}>
              <Input type="text" name="name" placeholder="Full Name" onChange={handleChange} style={{paddingLeft: "5%"}}/>
              <Input type="email" name="email" placeholder="Your Email Address" onChange={handleChange} style={{paddingLeft: "5%"}}/>
              <Input type="tel" name="phone" placeholder="Phone (Optional)" onChange={handleChange} style={{paddingLeft: "5%"}}/>
              <Input type="text" name="subject" placeholder="Subject" onChange={handleChange} style={{paddingLeft: "5%"}}/>
              <Textarea name="message" placeholder="Your Message Here" onChange={handleChange} style={{paddingLeft: "5%"}}/>
              <SubmitButton type="submit">Send</SubmitButton>
            </Form>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
