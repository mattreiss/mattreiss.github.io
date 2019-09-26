import React from 'react';
import { Link } from 'react-router-dom';
import {
  CodeSnippet,
  Article,
  Section,
  Title,
  SubTitle,
  Paragraph
} from '../atoms';

class Code extends React.Component {
  render() {
    return (
      <Section>
        <Article>
          <Title>Responsive Images with Styled Components</Title>
          <SubTitle>09/17/2019</SubTitle>
          <Paragraph>
            Here is a cool hack I did to display responsive images in a grid with styled components.
          </Paragraph>
          <CodeSnippet
            url='https://raw.githubusercontent.com/mattreiss/mattreiss.github.io/clean/src/components/pages/Photos.jsx'
            start={146}
            end={150}
            showLines={true}
          />
          <Paragraph>
            I first created an Image component that takes in props called 'scale' and 'isSquare',
            which determine the width of the image (e.g scale=1 fills the screen and scale=2 is half of the screen)
            and if the image should be rendered to fill a square parent (cropping and centering if necessary).
            Here is the code that updates the dimensions based on those props and the image's original aspect ratio.
          </Paragraph>
          <CodeSnippet
            url='https://raw.githubusercontent.com/mattreiss/mattreiss.github.io/clean/src/components/elements/Image.jsx'
            start={39}
            end={66}
            showLines={true}
          />
          <Paragraph>
            Then I created multiple styled components that wrap the Image component with the 'scale' prop set accordingly and use media queries to determine when to display the component.
          </Paragraph>
          <CodeSnippet
            url='https://raw.githubusercontent.com/mattreiss/mattreiss.github.io/clean/src/components/pages/Photos.jsx'
            start={38}
            end={83}
            showLines={true}
          />
          <Paragraph>
            Finally I combined all of those components into a single component called ResponsiveImage.
          </Paragraph>
          <CodeSnippet
            url='https://raw.githubusercontent.com/mattreiss/mattreiss.github.io/clean/src/components/pages/Photos.jsx'
            start={90}
            end={100}
            showLines={true}
          />
          <Paragraph>
            I could probably improve on how this is done, since it renders each image for every single screen size and just hides and shows them, but for now it seems to work pretty good!
          </Paragraph>
          <Paragraph>
            Check out the <Link to="/Photos">Photos</Link> section to see the responsive images change as you change your screen size!
          </Paragraph>
        </Article>

        <Article>
          <Title>Chess</Title>
          <SubTitle>09/14/2019</SubTitle>
          <Paragraph>
            I am working on a Chess App!
            Here is some code...
          </Paragraph>
          <CodeSnippet
            url='https://raw.githubusercontent.com/mattreiss/chess/chess/src/data/models/PieceModel.js'
            start={22}
            end={33}
            showLines={true}
          />
          <Paragraph>
            Those are how the Pieces are valued.
            Looks neat huh?
          </Paragraph>
          <CodeSnippet
            url='https://raw.githubusercontent.com/mattreiss/chess/chess/src/data/models/PieceModel.js'
            start={34}
            end={63}
            showLines={true}
          />
          <Paragraph>
            These are some other functions.
            They do stuff.
          </Paragraph>
        </Article>

      </Section>
    )
  }
}

export default Code;
