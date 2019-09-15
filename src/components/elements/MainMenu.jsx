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
  SideMenuClose,
  SideMenu
} from '../styled/Views';
import {
  Button,
  TextButton,
  MenuButton,
  SettingsButton
} from '../styled/Buttons';

const StyledLink = styled(Link)`
  text-decoration: none;
`;

class MainMenu extends React.Component {
  constructor(props) {
    super(props);
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

  onClickSettingsButton = () => {
      this.props.history.push('/Settings')
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
          color={selection == option ? 'primary' : 'negative'}
          fontSize="medium"
          pr="xl">
          {option}
        </TextButton>
      </StyledLink>
    ));
    return (
      <Header>
        <Nav>
          <MenuButton
            onClick={this.onClickMenuButton}
            color={hideSideMenu ? 'negative' : 'primary'}
          />
          <Menu>{menu}</Menu>
          <SideMenuClose onClick={this.onClickMenuButton} hidden={hideSideMenu} />
          <SideMenu hidden={hideSideMenu}>{menu}</SideMenu>
          <SettingsButton
            onClick={this.onClickSettingsButton}
            color={selection == "Settings" ? 'primary' : 'negative'}
          />
        </Nav>
      </Header>
    )
  }
}

export default withRouter(MainMenu);
