import React from 'react';
import {
  Article,
  Section,
  Title,
  SubTitle,
  Paragraph
} from '../atoms';
import {
  PageTemplate
} from '../templates';

class Home extends React.Component {
  render() {
    return (
      <PageTemplate
        content={(
          <Section>
            <Article>
              <Title>About Me</Title>
              <SubTitle>09/17/2019</SubTitle>
              <Paragraph>
                Skateboarding, Photography, and Coding have become my favorite outlets for me to express myself.
                Falling over and over again until I finally land a trick on my skateboard is painful and fun.
                Capturing a moment in time with my camera is sick too.
                I also try to work on software projects that combine things that I am passionate about.
                But I have the problem of having too many app ideas and starting new projects that I end up not finishing.
                This website will probably be another one of those projects.
              </Paragraph>
            </Article>
          </Section>
        )}
      />
    )
  }
}

export default Home;
