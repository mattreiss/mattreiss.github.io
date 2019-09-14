import React from 'react';
import styled from 'styled-components';
import {
  Link,
  withRouter
} from 'react-router-dom';
import {
  Header,
  Nav,
  Article,
  Row,
  Menu,
  SideMenu
} from '../styled/Views';
import {
  Button,
  TextButton,
  MenuButton
} from '../styled/Buttons';

const StyledLink = styled(Link)`
  text-decoration: none;
`;

class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    console.log("this.props.location", this.props.location)
    let selection = this.props.location.pathname.substring(1);
    if (selection.length <= 1) selection = 'Home';
    this.state = {
      selection,
      hideSideMenu: true
    }
  }

  onClickOption = (selection) => {
    this.setState({
      selection,
      hideSideMenu: true
    })
  }

  onClickMenuButton = () => {
    this.setState({
      hideSideMenu: !this.state.hideSideMenu
    });
  }

  render() {
    let {
      selection,
      hideSideMenu
    } = this.state
    let menu = [];
    [ 'Home',
      'Photos',
      'Code',
      // 'Skate',
      // 'About',
      // 'Contact'
    ].forEach(option => menu.push(
      <StyledLink key={option} to={`/${option}`}>
        <TextButton
          onClick={() => this.onClickOption(option)}
          negative={selection != option}
          primary={selection == option}
          large={selection == option}>
          {option}
        </TextButton>
      </StyledLink>
    ));
    return (
      <Header>
        <Nav>
          <MenuButton onClick={this.onClickMenuButton} dark normal/>
          <Menu>{menu}</Menu>
          <SideMenu hidden={hideSideMenu}>{menu}</SideMenu>
        </Nav>
      </Header>
    )
  }
}

export default withRouter(MainMenu);
