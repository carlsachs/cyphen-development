import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import tw from "twin.macro"; //eslint-disable-line
import styled from "styled-components";
import axios from "axios";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "functions/AnimationRevealPage.js";
import Header from "components/headers/headerBoost";
import Footer from "components/footers/FooterBoost";
import { SectionHeading, Subheading as SubheadingBase } from "components/basic/Headings.js";
import { ContentWithPaddingXl } from "components/basic/Layouts.js";
import {ReactComponent as SvgDotPatternIcon} from "../../images/dot-pattern.svg"

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight text-blue-600`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;
const HeaderContainer = tw.div`mt-10 w-full flex flex-col items-center`;

const TwoColumn = tw.div`flex flex-col sm:flex-row justify-between`;
const Column = tw.div`sm:w-5/12 flex flex-col`;
const InputContainer = tw.div`relative py-5 mt-6`;
const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-sm`;
const Input = tw.input``;
const TextArea = tw.textarea`h-24 sm:h-full resize-none`;
const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-blue-500 text-blue-100 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-blue-200 hover:text-blue-800 hocus:-translate-y-px hocus:shadow-xl`;

const SvgDotPattern1 = tw(SvgDotPatternIcon)`absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 -z-10 opacity-50 text-blue-500 fill-current w-24`
const SvgDotPattern2 = tw(SvgDotPatternIcon)`absolute bottom-0 left-0 transform translate-y-1/2 translate-x-1/2 -z-10 opacity-50 text-blue-500 fill-current w-24`

const FormContainer = styled.div`
  ${tw`p-10 sm:p-12 md:p-16 bg-blue-500 text-blue-800 rounded-lg relative`}
  form {
    ${tw`mt-4`}
  }
  h2 {
    ${tw`text-3xl sm:text-4xl font-bold`}
  }
  input,textarea {
    ${tw`w-full bg-transparent text-blue-100 text-base font-medium tracking-wide border-b-2 py-2 text-blue-100 hocus:border-blue-500 focus:outline-none transition duration-200`};

    ::placeholder {
      ${tw`text-white`}
    }
  }
`;


export default () => {

  const gradientBgblue = css`
  background: rgb(81,203,255);
  background: linear-gradient(90deg, rgba(81,203,255,0.9094012605042017) 0%, rgba(48,134,255,0.8981967787114846) 100%);
  `

  const gradientBg2blue = css`
  background: rgb(33,133,176);
  background: linear-gradient(90deg, rgba(33,133,176,0.9094012605042017) 0%, rgba(12,93,207,0.8981967787114846) 100%);
  `

  const gradientBg3blue = css`
  background: rgb(17,136,215);
  background: linear-gradient(90deg, rgba(17,136,215,0.9094012605042017) 0%, rgba(8,67,149,0.8981967787114846) 100%);
  `

  const gradientBg4blue = css`
  background: rgb(9,82,162);
  background: linear-gradient(90deg, rgba(9,82,162,0.9094012605042017) 0%, rgba(4,38,97,0.8981967787114846) 100%);
  `

    let history = useHistory();

    const [boost, setBoost] = useState({
      colors: "",
      scheme: "",
      blacklistColors: "",
      content: "",
      pictures: "",
      logoScheme: "",
      logoColor: "",
      logoIdea: "",
      brandName: "",
      brandSlogan: "",
      brandDescription: "",
      addedContent: "",
      contentExtra: "",
      comments: "",
      extra: "",
      user_id: window.localStorage.getItem("id")
    })

    const handleChange = (e) => {
      e.preventDefault();
      setBoost({
        ...boost,
        [e.target.name]: e.target.value
      })
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post(`https://cyphen-main.herokuapp.com/api/package/boost`, boost)
      .then(res => {
        alert("post successful")
        setTimeout(() => {
          history.push("/additional")
          }, 1000)
      })
      .catch(err => {
        alert("posting error")
      })
    }

    return (

    <AnimationRevealPage>
    
        <Header />
        <HeaderContainer>
            <Subheading><span style={{color: "#3086ff"}}>Step</span><span style={{color: "#0556bf"}}> 3</span></Subheading>
            <Heading style={{color: "#3086ff"}}>Build your <span style={{color: "#0556bf"}}>Boost</span> Package</Heading>
            <Description style={{color: "#002350"}}>Envision what you want your online presence to feel like, and tell us everything!  This helps us make your vision a reality!</Description>
        </HeaderContainer>
        <Content>
            <Container>
            <Content>
              <FormContainer css={gradientBgblue}>
                <div tw="mx-auto max-w-4xl">
                  <h2 style={{
                    color: "#c9edff",
                    textAlign: "center"
                  }}>Color Scheme</h2>
                  <form>
                    <TwoColumn>
                      <Column>
                        <InputContainer>
                          <Label htmlFor="colors-input">Colors (Hex Values)</Label>
                          <Input id="colors" type="text" name="colors" onChange={handleChange} placeholder="Ex: Primary: #1C7ED4, Secondary: #6CB5F5" />
                        </InputContainer>
                        <InputContainer>
                          <Label htmlFor="scheme-input">Light Vs. Dark Scheme</Label>
                          <Input id="scheme" type="text" name="scheme" onChange={handleChange} placeholder="Ex: Light Scheme" />
                        </InputContainer>
                        <InputContainer tw="flex-1">
                          <Label htmlFor="blacklist-input">Blacklisted Colors</Label>
                          <Input id="blacklistColors" type="text" name="blacklistColors" onChange={handleChange} placeholder="Ex: No Red" />
                        </InputContainer>
                      </Column>
                      <Column>
                        <InputContainer tw="flex-1">
                          <Label htmlFor="blacklist-input">Anything else related to color/scheme?</Label>
                          <TextArea id="content" type="text" name="content" onChange={handleChange} placeholder="Ex: Make sure all the buttons start off as the secondary color, then switch to the primary color on hover." />
                        </InputContainer>
                      </Column>
                    </TwoColumn>
                  </form>
                </div>
                <SvgDotPattern2 />
              </FormContainer>
            </Content>
          </Container>
        </Content>
        <Content>
        <Container>
        <Content>
          <FormContainer css={gradientBgblue}>
            <div tw="mx-auto max-w-4xl">
              <h2 style={{
                color: "#c9edff",
                textAlign: "center"
              }}>Logo Design</h2>
              <form>
                  <Column>
                    <InputContainer>
                      <Label htmlFor="idea-input">Logo Idea</Label>
                      <TextArea id="logoIdea" type="text" name="logoIdea" onChange={handleChange} placeholder="Ex: I want two 'C' letter joined in some way." />
                    </InputContainer>
                    <InputContainer>
                      <Label htmlFor="logoScheme-input">Light Vs. Dark Scheme</Label>
                      <Input id="logoScheme" type="text" name="logoScheme" onChange={handleChange} placeholder="Ex: Dark Scheme" />
                    </InputContainer>
                    <InputContainer tw="flex-1">
                      <Label htmlFor="logoColor-input">Blacklisted Colors</Label>
                      <Input id="logoColor" type="text" name="logoColor" onChange={handleChange} placeholder="Ex: No Red" />
                    </InputContainer>
                  </Column>
              </form>
            </div>
            <SvgDotPattern1 />
          </FormContainer>
        </Content>
      </Container>
    </Content>
        <Content>
            <Container>
          <Content>
            <FormContainer css={gradientBgblue}>
              <div tw="mx-auto max-w-4xl">
                <h2 style={{
                  color: "#c9edff",
                  textAlign: "center"
                }}>Branding</h2>
                <form>
                  <TwoColumn>
                    <Column>
                      <InputContainer>
                        <Label htmlFor="brandName-input">Brand Name</Label>
                        <Input id="brandName-input" type="text" name="brandName" onChange={handleChange} placeholder="Ex: Cyphen Development" />
                      </InputContainer>
                      <InputContainer>
                        <Label htmlFor="slogan-input">Brand Slogan</Label>
                        <Input id="slogan-input" type="text" name="brandSlogan" onChange={handleChange} placeholder="Ex: The Professional Look You Deserve" />
                      </InputContainer>
                      <InputContainer tw="flex-1">
                        <Label htmlFor="summary-input">Brand Summary</Label>
                        <TextArea id="summary-input" type="text" name="brandDescription" onChange={handleChange} placeholder="Ex: We use the most modern technologies to produce web applications delivering efficient and secure business interfaces to clients around the world." />
                      </InputContainer>
                    </Column>
                    <Column>
                      <InputContainer tw="flex-1">
                        <Label htmlFor="blacklist-input">Anything else related to your brand?</Label>
                        <TextArea id="comments" type="text" name="comments" onChange={handleChange} placeholder="Ex: Our brand takes pride in a simple, modern look.  Please implement that feel into our interface." />
                      </InputContainer>
                    </Column>
                  </TwoColumn>
                </form>
              </div>
              <SvgDotPattern2 />
            </FormContainer>
          </Content>
        </Container>
        </Content>
        <Content>
        <Container>
        <Content>
          <FormContainer css={gradientBgblue}>
            <div tw="mx-auto max-w-4xl">
              <h2 style={{
                color: "#c9edff",
                textAlign: "center"
              }}>Content</h2>
              <form>
                <TwoColumn>
                  <Column>
                    <InputContainer>
                      <Label htmlFor="logo-input">Logo</Label>
                      <Input id="logoScheme" type="text" name="logoScheme" onChange={handleChange} placeholder="Link to Logo" />
                    </InputContainer>
                    <InputContainer>
                      <Label htmlFor="pictures-input">Pictures</Label>
                      <Input id="pictures" type="text" name="pictures" onChange={handleChange} placeholder="Ex: Link/Upload pictures here" />
                    </InputContainer>
                    <InputContainer tw="flex-1">
                      <Label htmlFor="other-input">Other Content Upload</Label>
                      <TextArea id="addedContent" type="text" name="addedContent" onChange={handleChange} placeholder="Ex: Link to other content" />
                    </InputContainer>
                  </Column>
                  <Column>
                    <InputContainer tw="flex-1">
                      <Label htmlFor="-input">Anything else related to your content?</Label>
                      <TextArea id="extra" type="text" name="extra" onChange={handleChange} placeholder="Ex: I prefer to have picture 1 and 3 on separate pages." />
                    </InputContainer>
                  </Column>
                </TwoColumn>
              </form>
            </div>
            <SvgDotPattern1 />
          </FormContainer>
          <div>
          <div style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2%"
          }}>
              <SubmitButton type="submit" onClick={handleSubmit, window.open("https://checkout.square.site/buy/OQFSQ3J4A2FW5TYR4ETPFWKF")}>Continue</SubmitButton>
          </div>
          </div>
        </Content>
      </Container>
        </Content>
        <Footer />
    </AnimationRevealPage>

    )
}