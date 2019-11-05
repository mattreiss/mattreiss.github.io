import React from 'react';
import io from 'socket.io-client';
import Api from '../../data/Api';
import {
  Section,
  Article,
  Paragraph,
  Title,
  SubTitle,
  Link
} from '../atoms';
import {
  PageTemplate
} from '../templates';

class Stacker extends React.Component {
  state = {
    connected: false,
    loading: false
  }

  componentDidMount() {
    var socket = io('http://localhost:1337');
    socket.on('connect', () => {
      console.log("connected");
      this.setState({connected: true})
    });
    socket.on('result', function(result){ console.log("result ", result)});
    socket.on('disconnect', () => {
      console.log("disconnected");
      this.setState({connected: false})
    });
  }

  render() {
    return (
      <PageTemplate
        content={(
          <Section>
            {this.state.connected ? (
              <Article>
                <Title>Stacker</Title>
                <SubTitle>Connected</SubTitle>
              </Article>
            ) : (
              <Article>
                <Title>Stacker Server not found!</Title>
                <Paragraph>
                  <Link color="primary" mr="small" href="https://github.com/mattreiss/Stacker">Click here</Link>
                  for instructions on how to setup the Stacker Server.
                </Paragraph>
              </Article>
            )}
          </Section>
        )}
      />
    )
  }
}

export default Stacker;
