import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

//styling
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import {ReactComponent as SvgDotPatternIcon} from "../../images/dot-pattern.svg"
import {ReactComponent as PhoneIcon} from "../../images/phonemethod.svg"
import {ReactComponent as EmailIcon} from "../../images/emailmethod.svg"

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const Box1 = styled.div`

  :hover{
    background: #7ab9f0;
    cursor: pointer;
  }
`;

const Box2 = styled.div`
  :hover{
    background: #7ab9f0;
    cursor: pointer;
  }
`;

const FormContainer = styled.div`
  ${tw`p-10 sm:p-12 md:p-16 bg-blue-500 text-gray-100 rounded-lg relative`}
  form {
    ${tw`mt-4`}
  }
  h2 {
    ${tw`text-3xl sm:text-4xl font-bold`}
  }
  input,textarea {
    ${tw`w-full bg-transparent text-gray-100 text-base font-medium tracking-wide border-b-2 py-2 text-blue-800 hocus:border-blue-800 focus:outline-none transition duration-200`};

    ::placeholder {
      ${tw`text-white`}
    }
  }
`;

const TwoColumn = tw.div`flex flex-col sm:flex-row justify-between`;
const Column = tw.div`sm:w-5/12 flex flex-col`;
const InputContainer = tw.div`relative py-5 mt-6`;
const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-sm`;
const Input = tw.input``;
const TextArea = tw.textarea`h-24 sm:h-full resize-none`;
const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-gray-100 text-blue-500 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-blue-900 hover:text-blue-100 hocus:-translate-y-px hocus:shadow-xl`;

const SvgDotPattern1 = tw(SvgDotPatternIcon)`absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 -z-10 opacity-50 text-blue-500 fill-current w-24`

export default () => {

  //initiating useHistory
  let history = useHistory();

  //setting state for user form
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    e.preventDefault();
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`https://cyphen-main.herokuapp.com/api/users/login`, userLogin)
    .then(res => {
      alert("success")
      window.localStorage.setItem("id", res.data.id)
      console.log(res.data)
      setTimeout(() => {
        history.push("/order")
        }, 1000)
    })
    .catch(err => {
      console.log(err)
      alert("Uh Oh! Something went wrong.  If the issue persists, email us as cyphensupport@protonmail.com.")
    })
  }

  return (
    <Container>
      <Content>
        <FormContainer>
          <div tw="mx-auto max-w-4xl">
            <h2 style={{
              color: "white"
            }}>Credentials</h2>
            <form onSubmit={handleSubmit}>
              <TwoColumn>
                <Column>
                  <InputContainer>
                    <Label htmlFor="email-input">Email Address</Label>
                    <Input id="email-input" type="email" name="email" onChange={handleChange} placeholder="E.g. john@mail.com" />
                  </InputContainer>
                  <InputContainer>
                  <Label htmlFor="password-input">Password</Label>
                  <Input id="password-input" type="password" name="password" onChange={handleChange} placeholder="Enter Password" />
                  </InputContainer>

                </Column>
                <Column>

                </Column>
              </TwoColumn>
            </form>
            <div>
            <div style={{
              display: "flex",
              justifyContent: "center"
            }}>
            <div style={{
              width: "40%",
              display: "flex",
              justifyContent: "center"
            }}>
              <SubmitButton type="submit" value="Submit" onClick={handleSubmit}>Continue</SubmitButton>
            </div>
            </div>
            </div>
          </div>
          <SvgDotPattern1 />
        </FormContainer>
      </Content>
    </Container>
  );
};
