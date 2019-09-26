import React from 'react';
import styled from 'styled-components';
import { Menu } from './components/organisms';

const Container = styled.div`
  background-color: ${props => props.theme.colors.light};
  width: 100%;
  height: 100%;
  position: fixed;
  overflow-y: scroll;
`;

class ModalTemplate extends React.Component {
  render() {
    let {
      header,
      content,
      footer
    } = this.props;
    return (
      <Container>
        <Menu />
        {header}
        {content}
        {footer}
      </Container>
    )
  }
}

export default ModalTemplate;
