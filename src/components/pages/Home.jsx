import React from 'react';
import Prism from 'prismjs';
import {
  CodeSnippet,
} from '../elements';
import {
  Button,
  TextButton,
  MenuButton
} from '../styled/Buttons';
import {
  Header,
  Nav,
  Article,
  Section,
  Row,
  Title,
  SubTitle,
  Paragraph,
  Aside
} from '../styled/Views';

class Home extends React.Component {
  render() {
    return (
      <Section>
        <Article>
          <Title>About Me</Title>
          <SubTitle>07/25/1992</SubTitle>
          <Paragraph>
            Skateboarding, Photography, and Coding have become my favorite outlets for me to express myself.
            Improving my skills and style on a skateboard is also my favorite way of exercising; Going to a gym feels so mind numbingly boring to me.
            Photography also invovles some excersize, like hiking, but for me it is a little more relaxing.
            Being out in nature and enjoying a sunset or the milkyway passing overhead while my camera shoots a timelapse is how I like to meditate.
            And then when I finish editing, posting, and sometimes printing a photo, I have something I can look back at and get the same feeling I had when I was there.
            Using my coding skills, I have created Photoshop scripts to automate my timelapse processing.
            I have the problem of having too many app ideas and starting new projects that I end up not finishing.
            This website will probably be another one of those projects.
          </Paragraph>
        </Article>
      </Section>
    )
  }
}

export default Home;
