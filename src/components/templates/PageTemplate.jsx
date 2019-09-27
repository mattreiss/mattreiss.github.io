import React from 'react';
import styled from 'styled-components';
import { Menu } from '../organisms';

const Container = styled.div`
  background-color: ${props => props.theme.colors.light};
  width: 100%;
  height: 100%;
  position: fixed;
  overflow-y: scroll;
`;

class PageTemplate extends React.Component {
  render() {
    let {
      header,
      content,
      children,
      footer,
    } = this.props;
    return (
      <Container>
        {header || <Menu />}
        {content}
        {children}
        {footer}
      </Container>
    )
  }
}

export default PageTemplate;
