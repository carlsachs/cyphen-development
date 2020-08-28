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

const SvgDotPattern1 = tw(SvgDotPatternIcon)`absolute bottom-0 left-0 transform translate-y-1/2 translate-x-1/2 -z-10 opacity-50 text-purple-500 fill-current w-24`

export default () => {

  const gradientBg = css`
    background: rgb(90,13,171);
    background: linear-gradient(90deg, rgba(90,13,171,0.9094012605042017) 0%, rgba(53,4,106,0.8981967787114846) 100%);
  `

  let history = useHistory();

  return (
    <Container>
      <Content>
        <FormContainer css={gradientBg}>
          <div tw="mx-auto max-w-4xl">
            <h2 style={{
              color: "white",
              textAlign: "center"
            }}>Content</h2>
            <form>
              <TwoColumn>
                <Column>
                  <InputContainer>
                    <Label htmlFor="logo-input">Logo</Label>
                    <Input id="logo-input" type="text" name="logo" placeholder="Link to Logo" />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="pictures-input">Pictures</Label>
                    <Input id="pictures-input" type="text" name="pictures" placeholder="Ex: Link/Upload pictures here" />
                  </InputContainer>
                  <InputContainer tw="flex-1">
                    <Label htmlFor="other-input">Other Content Upload</Label>
                    <TextArea id="other-input" type="text" name="othercontent" placeholder="Ex: Link to other content" />
                  </InputContainer>
                </Column>
                <Column>
                  <InputContainer tw="flex-1">
                    <Label htmlFor="-input">Anything else related to your content?</Label>
                    <TextArea id="-input" type="text" name="extra" placeholder="Ex: I prefer to have picture 1 and 3 on separate pages." />
                  </InputContainer>
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
