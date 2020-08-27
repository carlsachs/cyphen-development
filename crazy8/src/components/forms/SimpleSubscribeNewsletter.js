import React, {useState} from "react";
import tw from "twin.macro";
import {ReactComponent as EmailNewsletterIconBase } from "../../images/email-newsletter-icon.svg"
import {Container as ContainerBase } from "components/misc/Layouts.js"
import {SectionHeading} from "components/misc/Headings.js";
import {PrimaryButton} from "components/misc/Buttons.js";

import axios from "axios";


const Container = tw(ContainerBase)`bg-secondary-800 -mx-8`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col lg:flex-row px-8`
const TextColumn = tw.div`flex items-center flex-col sm:flex-row`
const FormColumn = tw.div`mt-12 lg:mt-0 lg:ml-16 w-full sm:w-auto`

const EmailNewsletterIcon = tw(EmailNewsletterIconBase)`w-16 h-16 text-blue-400`
const HeadingInfoContainer = tw.div`sm:ml-6 mt-6 sm:mt-0`
const Heading = tw(SectionHeading)`text-blue-500 sm:text-left leading-none`
const Description = tw.p`text-blue-200 font-medium text-sm max-w-sm mt-2 sm:mt-1 text-center sm:text-left`

const Form = tw.form`text-sm max-w-sm sm:max-w-none mx-auto`
const Input = tw.input`w-full sm:w-auto block sm:inline-block px-6 py-4 rounded bg-secondary-600 tracking-wider font-bold border border-blue-500 focus:border-blue-600 focus:outline-none sm:rounded-r-none hover:bg-secondary-500 transition duration-300 text-blue-300`
const Button = tw(PrimaryButton)`w-full sm:w-auto mt-6 sm:mt-0 sm:rounded-l-none py-4 bg-blue-500 text-blue-800 hocus:bg-blue-700 hocus:text-blue-100 border border-blue-500 hocus:border-blue-700`


export default () => {

  const [subscriber, setSubscriber] = useState({
    email: ""
  });

  const handleChange = (e) => {
    e.preventDefault();
    setSubscriber({
      ...subscriber,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`https://cyphen-main.herokuapp.com/api/form/newsletter`, subscriber)
    .then(res => {
      alert("Awesome! You'll be up to date, and the first to know EVERYTHING!")
    })
    .catch(err => {
      console.log(err)
      alert("Something went wrong! Please try again!")
    })
  }

  return (
    <Container>
      <Content>
        <Row>
          <TextColumn>
            <EmailNewsletterIcon />
            <HeadingInfoContainer>
              <Heading>Newsletter</Heading>
              <Description>Subscribe to stay up to date with our latest news and offers</Description>
            </HeadingInfoContainer>
          </TextColumn>
          <FormColumn>
          <Form>
            <Input name="newsletter" type="email" placeholder="Your Email Address" />
            <Button type="submit">Subscribe</Button>
          </Form>
          </FormColumn>
        </Row>
      </Content>
    </Container>
  );
};
