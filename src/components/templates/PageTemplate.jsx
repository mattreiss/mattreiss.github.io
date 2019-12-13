import React from 'react';
import styled from 'styled-components';
import { SideBar, TopBar } from '../organisms';

const Container = styled.div`
  background-color: ${props => props.theme.colors.light};
  width: 100%;
  height: 100%;
  position: fixed;
`;
const Content = styled.div`
  background-color: ${props => props.theme.colors.light};
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

class PageTemplate extends React.Component {
  state = {
    toggleMenu: false
  }

  toggleMenu = () => {
    this.setState({
      toggleMenu: !this.state.toggleMenu
    })
  }

  render() {
    let {
      header,
      content,
      children,
      footer,
    } = this.props;
    let { toggleMenu } = this.state;
    return (
      <Container>
        <TopBar onToggleMenu={this.toggleMenu}/>
        <SideBar open={toggleMenu} />
        <Content>{content}{children}</Content>
        {footer}
      </Container>
    )
  }
}

export default PageTemplate;
