 import React from 'react';
import styled from 'styled-components';
import { SideBar, TopBar } from '../organisms';

const Row = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
`;

const Content = styled.div`
  background-color: ${props => props.theme.colors.light};
  overflow-y: scroll;
  flex: 1;
  height: 100%;
  padding-bottom: ${p => p.theme.headerHeight}px;
`;

const Container = styled.div`
  background-color: ${props => props.theme.colors.light};
  width: 100%;
  height: 100%;
  position: fixed;
`;

class PageTemplate extends React.Component {
  state = {
    toggleMenu: false
  }

  toggleMenu = () => {
    this.setState({ toggleMenu: !this.state.toggleMenu })
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
        <Row>
          <SideBar open={toggleMenu} />
          <Content>
            {content}
            {children}
          </Content>
        </Row>
        {footer}
      </Container>
    )
  }
}

export default PageTemplate;
