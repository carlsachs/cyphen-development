import React from "react";
import { useHistory } from "react-router-dom";
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

  let history = useHistory();

  return (
    <Container>
      <Content>
        <FormContainer>
          <div tw="mx-auto max-w-4xl">
            <h2 style={{
              color: "white"
            }}>Color Scheme</h2>
            <form>
              <TwoColumn>
                <Column>
                  <InputContainer>
                    <Label htmlFor="colors-input">Colors (Hex Values)</Label>
                    <Input id="colors-input" type="text" name="colors" placeholder="Ex: Primary: #1C7ED4, Secondary: #6CB5F5" />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="email-input">Your Email Address</Label>
                    <Input id="email-input" type="email" name="email" placeholder="E.g. john@mail.com" />
                  </InputContainer>
                  <InputContainer tw="flex-1">
                    <Label htmlFor="phone-input">Your Phone Number</Label>
                    <Input id="phone-input" type="tel" name="phone" placeholder="Phone (Optional)" />
                  </InputContainer>
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
                    }}>Content</h2>
                    <h3 style={{
                      color: "white"
                    }}>for filling your site/application!</h3>
                  </div>
                  <div>
                    <Box2 style={{
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
                    <Box1 style={{
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

              <SubmitButton type="submit" value="Submit" onClick={() => history.push("/jumpstart")}>Continue</SubmitButton>
            </form>
          </div>
          <SvgDotPattern1 />
        </FormContainer>
      </Content>
    </Container>
  );
};