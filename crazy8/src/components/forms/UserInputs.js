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
  }
`;

const Box2 = styled.div`
  :hover{
    background: #7ab9f0
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
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    emailPref: false,
    phonePref: false,
    accept: false
  });

  const handleChange = (e) => {
    e.preventDefault();
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`https://cyphen-main.herokuapp.com/api/form/orders`, userData)
    .then(res => {
      alert("Posted is working")
      setTimeout(() => {
        history.push("/order")
        }, 1000)
    })
    .catch(err => {
      alert("there was an error check it out")
    })
  }

  return (
    <Container>
      <Content>
        <FormContainer>
          <div tw="mx-auto max-w-4xl">
            <h2 style={{
              color: "white"
            }}>Your Information</h2>
            <form onSubmit={handleSubmit}>
              <TwoColumn>
                <Column>
                  <InputContainer>
                    <Label htmlFor="name-input">Your Name</Label>
                    <Input id="name-input" type="text" name="name" onChange={handleChange} placeholder="Ex: Jane " />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="email-input">Your Email Address</Label>
                    <Input id="email-input" type="email" name="email" onChange={handleChange} placeholder="E.g. john@mail.com" />
                  </InputContainer>
                  <InputContainer tw="flex-1">
                    <Label htmlFor="phone-input">Your Phone Number</Label>
                    <Input id="phone-input" type="tel" name="phone" onChange={handleChange} placeholder="Phone (Optional)" />
                  </InputContainer>
                  <InputContainer>
                  <div>
                    <Label htmlFor="terms-input" style={{
                      width: "100%",
                      textAlign: "center"
                    }}>By continuing, you acknowledge you have Read and Accept the Terms of Agreement</Label>
                  </div>
                  </InputContainer>
                  <div style={{
                    display: "flex",
                    justifyContent: "center"
                  }}>
                  <div style={{
                    width: "35%"
                  }}>
                    <SubmitButton type="submit" value="Submit" onClick={handleSubmit}>Continue</SubmitButton>
                  </div>
                  </div>
                </Column>
                <Column>
                <div style={{
                  justifyContent: "center"
                }}>
                  <div style={{
                    marginLeft: "4%"
                  }}>
                    <h2 style={{
                      color: "white",
                    }}>Preferred Method</h2>
                    <h3 style={{
                      color: "white"
                    }}>Of Contact</h3>
                  </div>
                  <div>
                    <Box2 onClick={() => setUserData({...userData, emailPref: true, phonePref: false})} style={{
                      border: "1px solid white",
                      borderRadius: "10px",
                      height: "100px",
                      marginTop: "5%",
                      marginBottom: "5%"
                    }}>
                    <div style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "6.5%"
                    }}>
                      <EmailIcon style={{
                        height: "50px",
                        width: "50px",
                        fill: "white",
                      }}/>
                    </div>
                    </Box2>
                    <Box1 onClick={() => setUserData({...userData, phonePref: true, emailPref: false})} style={{
                      border: "1px solid white",
                      borderRadius: "10px",
                      height: "100px"
                    }}>
                    <div style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "6.5%"
                    }}>
                    <PhoneIcon style={{
                      height: "50px",
                      width: "50px",
                      fill: "white"
                    }}/>
                    </div>
                      </Box1>
                      </div>
                  </div>
                </Column>
              </TwoColumn>
            </form>
          </div>
          <SvgDotPattern1 />
        </FormContainer>
      </Content>
    </Container>
  );
};
