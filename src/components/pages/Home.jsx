import React from 'react';
// import {
//   CodeSnippet,
// } from '../elements';
// import {
//   Button,
//   TextButton,
//   MenuButton
// } from '../styled/Buttons';
import {
  Article,
  Section,
  Title,
  SubTitle,
  Paragraph
} from '../styled/Views';

class Home extends React.Component {
  render() {
    return (
      <Section>
        <Article>
          <Title>About Me</Title>
          <SubTitle>09/15/2019</SubTitle>
          <Paragraph>
            Skateboarding, Photography, and Coding have become my favorite outlets for me to express myself.
            Falling over and over again until I finally stick a landing is also my favorite way of exercising.
            Photography also requires some excersize, like hiking, but for me it is a little more relaxing.
            Being out in nature and enjoying a sunset or the milkyway passing by while my camera shoots a timelapse is how I like to meditate.
            And then when I finish editing, posting, and sometimes printing a photo, I have something I can look back at and get the same feeling I had when I was there.
            I like to write Photoshop scripts to automate my timelapse processing and create different effects.
            When I am not going out to skate or shoot photos, because I get injured a lot, I work on software projects.
            I am most interested in working on projects that combine things that I am passionate about.
            I have the problem of having too many app ideas and starting new projects that I end up not finishing.
            This website will probably be another one of those projects, but hopefully not!
          </Paragraph>
        </Article>
      </Section>
    )
  }
}

export default Home;
