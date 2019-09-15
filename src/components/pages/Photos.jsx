import React from 'react';
import styled from 'styled-components';
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
  Row
} from '../styled/Views';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Item = styled.div`
  border: 1px solid grey;
  display: inline-block;
  width: 25%;
  height: 300px;
`;

class Photos extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Item>item1</Item>
          <Item>item2</Item>
          <Item>item3</Item>
          <Item>item4</Item>
          <Item>item5</Item>
          <Item>item6</Item>
          <Item>item7</Item>
          <Item>item8</Item>
          <Item>item9</Item>
          <Item>item10</Item>
          <Item>item11</Item>
        </Row>
      </Container>
    )
  }
}

export default Photos;
