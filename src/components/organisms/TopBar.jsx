import React from 'react';
import styled from 'styled-components';
import {
  Link,
  withRouter
} from 'react-router-dom';
import {
  Button,
  Icon
} from '../atoms';
import {
  IconButton
} from '../molecules';

const SettingsButton = styled(IconButton).attrs(props => ({
  name: 'Settings'
}))`
  marginTop: auto;
  marginBottom: auto;
  justify-content: center;
  align-content: flex-end;
  position: absolute;
  right: ${props => props.theme.space.medium}px;
  width: 48px;
  height: 48px;
`;

const MenuButton = styled(IconButton).attrs(props => ({
  name: 'Menu',
  size: 'small'
}))`
  justify-content: center;
  align-content: flex-start;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  padding: ${props => props.theme.space.medium}px;
`;

const Header = styled.header`
`;

const Nav = styled.nav`
  width: 100vw;
  height: ${props => props.theme.headerHeight}px;
  padding: ${props => props.theme.space.medium}px;
  background: ${props => props.theme.colors.white};
  display: flex;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin-top: 2px;
`;


class TopBar extends React.Component {
  constructor(props) {
    super(props);
    let selection = this.props.location.pathname.substring(1);
    if (selection.length <= 1) selection = 'Home';
    this.state = {
      selection,
      hideSideMenu: true
    }
  }

  onClickMenuButton = () => {
    this.setState({
      hideSideMenu: !this.state.hideSideMenu
    });
    this.props.onToggleMenu();
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
    [
      {title: 'Photos', icon: 'PhotoLibrary', route: '/Photos'},
      {title: 'Code', icon: 'CodeBox', route: '/Code'},
      {title: 'Stacker', icon: 'Stack', route: '/Stacker'},
    ].forEach(option => menu.push(
      <StyledLink key={option.route} to={option.route}>
        <Button
          bg="transparent"
          onClick={() => this.onClickOption(option.route)}
          color='negative'
          fontSize="medium"
          pr="xl">
          <Icon
            mr="medium"
            p="small"
            name={option.icon}
          />
          {option.title}
        </Button>
      </StyledLink>
    ));
    return (
      <Header>
        <Nav>
          <MenuButton
            open={!hideSideMenu}
            bg="transparent"
            onClick={this.onClickMenuButton}
            color='negative'
          />
          <SettingsButton
            bg="transparent"
            onClick={this.onClickSettingsButton}
            color={selection === "Settings" ? 'primary' : 'negative'}
          />
        </Nav>
      </Header>
    )
  }
}

export default withRouter(TopBar);
