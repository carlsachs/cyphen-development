import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import tw from "twin.macro"; //eslint-disable-line
import styled from "styled-components";
import axios from "axios";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/lightGreen";
import Footer from "components/footers/MiniCenteredFooterGreen";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
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
const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-green-600 text-green-200 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-green-400 hover:text-green-800 hocus:-translate-y-px hocus:shadow-xl`;

const SvgDotPattern1 = tw(SvgDotPatternIcon)`absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 -z-10 opacity-50 text-green-500 fill-current w-24`
const SvgDotPattern2 = tw(SvgDotPatternIcon)`absolute bottom-0 left-0 transform translate-y-1/2 translate-x-1/2 -z-10 opacity-50 text-green-500 fill-current w-24`

const FormContainer = styled.div`
  ${tw`p-10 sm:p-12 md:p-16 bg-green-500 text-green-800 rounded-lg relative`}
  form {
    ${tw`mt-4`}
  }
  h2 {
    ${tw`text-3xl sm:text-4xl font-bold`}
  }
  input,textarea {
    ${tw`w-full bg-transparent text-green-100 text-base font-medium tracking-wide border-b-2 py-2 text-green-800 hocus:border-green-800 focus:outline-none transition duration-200`};

    ::placeholder {
      ${tw`text-white`}
    }
  }
`;


export default () => {

  const gradientBggreen = css`
  background: rgb(119,242,190);
  background: linear-gradient(90deg, rgba(119,242,190,0.9094012605042017) 0%, rgba(18,164,81,0.8729866946778712) 100%);
  `

  const gradientBg2green = css`
  background: rgb(68,221,155);
  background: linear-gradient(90deg, rgba(68,221,155,0.9094012605042017) 0%, rgba(7,181,79,0.8729866946778712) 100%);
  `

  const gradientBg3green = css`
  background: rgb(20,173,107);
  background: linear-gradient(90deg, rgba(20,173,107,0.9094012605042017) 0%, rgba(0,113,47,0.8729866946778712) 100%);
  `

  const gradientBg4green = css`
  background: rgb(8,107,64);
  background: linear-gradient(90deg, rgba(8,107,64,0.9094012605042017) 0%, rgba(0,48,20,0.8729866946778712) 100%);
  `

  const gradientBg5green = css`
  background: rgb(47,191,128);
  background: linear-gradient(90deg, rgba(47,191,128,0.9094012605042017) 0%, rgba(0,37,17,0.8729866946778712) 100%);
  `

  const gradientBg6green = css`
  background: rgb(19,116,74);
  background: linear-gradient(90deg, rgba(19,116,74,0.9094012605042017) 0%, rgba(1,46,21,0.8729866946778712) 100%);
  `

    let history = useHistory();

    const [throttle, setThrottle] = useState({
      colors: "",
      scheme: "",
      blacklistColors: "",
      content: "",
      brandName: "",
      brandSlogan: "",
      brandDescription: "",
      comments: "",
      logoScheme: "",
      logoColor: "",
      logoIdea: "",
      addedContent: "",
      extra: "",
      cyphenBoardColor: "",
      adminUsername: "",
      adminTempPassword: "",
      animationConcept: "",
    })

    const handleChange = (e) => {
      e.preventDefault();
      setThrottle({
        ...throttle,
        [e.target.name]: e.target.value
      })
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post(`https://cyphen-main.herokuapp.com/api/package/throttle`, throttle)
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
            <Subheading><span style={{color: "#0e9973"}}>Step</span><span style={{color: "#076a4e"}}> 3</span></Subheading>
            <Heading style={{color: "#0e9973"}}>Build your <span style={{color: "#076a4e"}}>Throttle</span> Package</Heading>
            <Description style={{color: "#012813"}}>Envision what you want your online presence to feel like, and tell us everything!  This helps us make your vision a reality!</Description>
        </HeaderContainer>
        <Content>
            <Container>
            <Content>
              <FormContainer css={gradientBg2green}>
                <div tw="mx-auto max-w-4xl">
                  <h2 style={{
                    color: "#126b3e",
                    textAlign: "center"
                  }}>Color Scheme</h2>
                  <form>
                    <TwoColumn>
                      <Column>
                        <InputContainer>
                          <Label htmlFor="colors-input">Colors (Hex Values)</Label>
                          <Input id="colors-input" type="text" name="colors" onChange={handleChange} placeholder="Ex: Primary: #1C7ED4, Secondary: #6CB5F5" />
                        </InputContainer>
                        <InputContainer>
                          <Label htmlFor="scheme-input">Light Vs. Dark Scheme</Label>
                          <Input id="scheme-input" type="text" name="scheme" onChange={handleChange} placeholder="Ex: Light Scheme" />
                        </InputContainer>
                        <InputContainer tw="flex-1">
                          <Label htmlFor="blacklist-input">Blacklisted Colors</Label>
                          <Input id="blacklist-input" type="text" name="blacklistColors" onChange={handleChange} placeholder="Ex: No Red" />
                        </InputContainer>
                      </Column>
                      <Column>
                        <InputContainer tw="flex-1">
                          <Label htmlFor="blacklist-input">Anything else related to color/scheme?</Label>
                          <TextArea id="blacklist-input" type="text" name="content" onChange={handleChange} placeholder="Ex: Make sure all the buttons start off as the secondary color, then switch to the primary color on hover." />
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
              <FormContainer css={gradientBg2green}>
                <div tw="mx-auto max-w-4xl">
                  <h2 style={{
                    color: "#126b3e",
                    textAlign: "center"
                  }}>CyphenBoard</h2>
                  <form>
                    <TwoColumn>
                      <Column>
                        <InputContainer>
                          <Label htmlFor="cyphen-color-input">CyphenBoard Color</Label>
                          <Input id="cyphen-color-input" type="text" name="cyphenBoardColor" onChange={handleChange} placeholder="Ex: Primary" />
                        </InputContainer>
                        <InputContainer>
                          <Label htmlFor="scheme-board-input">CyphenScheme</Label>
                          <Input id="scheme-board-input" type="text" name="cyphenScheme" onChange={handleChange} placeholder="Ex: Light Scheme" />
                        </InputContainer>
                        <InputContainer tw="flex-1">
                          <Label htmlFor="blacklist-input">Blacklisted Colors</Label>
                          <Input id="blacklist-input" type="text" name="blacklistColorsBoard" onChange={handleChange} placeholder="Ex: No Red" />
                        </InputContainer>
                      </Column>
                      <Column>
                        
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
          <FormContainer css={gradientBg2green}>
            <div tw="mx-auto max-w-4xl">
              <h2 style={{
                color: "#126b3e",
                textAlign: "center"
              }}>Logo Design</h2>
              <form>
                <TwoColumn>
                  <Column>
                    <InputContainer>
                      <Label htmlFor="idea-input">Logo Idea</Label>
                      <TextArea id="idea-input" type="text" name="logoIdea" onChange={handleChange} placeholder="Ex: I want two 'C' letters joined in some way." />
                    </InputContainer>
                    <InputContainer>
                      <Label htmlFor="logoScheme-input">Light Vs. Dark Scheme</Label>
                      <Input id="logoScheme-input" type="text" name="logoScheme" onChange={handleChange} placeholder="Ex: Dark Scheme" />
                    </InputContainer>
                    <InputContainer tw="flex-1">
                      <Label htmlFor="logoColor-input">Blacklisted Colors</Label>
                      <Input id="logoColor-input" type="text" name="logoColor" onChange={handleChange} placeholder="Ex: No Red" />
                    </InputContainer>
                  </Column>
                  <Column>
                    <InputContainer tw="flex-1">
                      <Label htmlFor="blacklist-input">Anything else related to color/scheme?</Label>
                      <TextArea id="blacklist-input" type="text" name="addedContent" onChange={handleChange} placeholder="Ex: Make sure all the buttons start off as the secondary color, then switch to the primary color on hover." />
                    </InputContainer>
                  </Column>
                </TwoColumn>
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
            <FormContainer css={gradientBg2green}>
              <div tw="mx-auto max-w-4xl">
                <h2 style={{
                  color: "#126b3e",
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
                        <TextArea id="blacklist-input" type="text" name="comments" onChange={handleChange} placeholder="Ex: Our brand takes pride in a simple, modern look.  Please implement that feel into our interface." />
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
              <FormContainer css={gradientBg2green}>
                <div tw="mx-auto max-w-4xl">
                  <h2 style={{
                    color: "#126b3e",
                    textAlign: "center"
                  }}>Animated Video</h2>
                  <form>
                      <Column>
                        <InputContainer>
                          <Label htmlFor="animation-input">Animated Video Description</Label>
                          <TextArea id="animation-input" type="text" name="animationConcept" onChange={handleChange} placeholder="Explain your business concept here for the complementary video." />
                        </InputContainer>
                      </Column>
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
          <FormContainer css={gradientBg2green}>
            <div tw="mx-auto max-w-4xl">
              <h2 style={{
                color: "#126b3e",
                textAlign: "center"
              }}>Content</h2>
              <form>
                <TwoColumn>
                  <Column>
                    <InputContainer>
                      <Label htmlFor="logo-input">Logo (BYO)</Label>
                      <Input id="logo-input" type="text" name="logoProvided" onChange={handleChange} placeholder="Link to Logo" />
                    </InputContainer>
                    <InputContainer>
                      <Label htmlFor="pictures-input">Pictures</Label>
                      <Input id="pictures-input" type="text" name="pictures" onChange={handleChange} placeholder="Ex: Link/Upload pictures here" />
                    </InputContainer>
                    <InputContainer tw="flex-1">
                      <Label htmlFor="other-input">Other Content Upload</Label>
                      <TextArea id="other-input" type="text" name="contentExtra" onChange={handleChange} placeholder="Ex: Link to other content" />
                    </InputContainer>
                  </Column>
                  <Column>
                    <InputContainer tw="flex-1">
                      <Label htmlFor="-input">Anything else related to your content?</Label>
                      <TextArea id="-input" type="text" name="extra" onChange={handleChange} placeholder="Ex: I prefer to have picture 1 and 3 on separate pages." />
                    </InputContainer>
                  </Column>
                </TwoColumn>
              </form>
            </div>
            <SvgDotPattern1 />
          </FormContainer>
          <div style={{
            display: "flex",
            justifyContent: "center"
          }}>
              <SubmitButton type="submit" onClick={handleSubmit}>Continue</SubmitButton>
          </div>
        </Content>
      </Container>
        </Content>      
        <Footer />
    </AnimationRevealPage>

    )
}