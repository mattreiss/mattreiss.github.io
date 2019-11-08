import React from 'react';
import styled from 'styled-components';
import {
  Link,
  withRouter
} from 'react-router-dom';
import { media } from '../../tools/StyledUtils';
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
  float: right;
  margin-top: ${props => props.theme.space.small}px;
`;

const MenuButton = styled(IconButton).attrs(props => ({
  name: 'Menu'
}))`
  float: left;
  display: none;
  ${media.tablet`
    display: inline-block;
    margin-top: ${props => props.theme.space.small}px;
  `};
`;

const Header = styled.header`
  width: 100%;
  min-height: ${props => props.theme.headerHeight}px;
  padding: ${props => props.theme.space.medium}px;
  background: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadow.medium};
  position: relative;
`;

const MenuContent = styled.span`
  height: 48px;
  padding: ${props => props.theme.space.medium}px;
  display: inline-block;
  ${media.tablet`
    display: none;
  `};
  ${media.phone`
    display: none;
  `};
`;

const MenuTitle = styled.span`
  color: ${props => props.theme.colors.negative};
  font-size:  ${props => props.theme.fontSizes.large}px;
  height: 48px;
  padding: ${props => props.theme.space.medium}px;
  display: none;
  ${media.tablet`
    display: inline-block;
  `};
  ${media.phone`
    display: inline-block;
  `};
`;

const SideMenuClose = styled.span`
  background: rgba(0,0,0,0.1);
  position:fixed;
  width: 100%;
  height: 100%;
  top:0;
  left:0;
  display: none;
  ${media.tablet`
    display: ${({hidden}) => hidden ? 'none' : 'block'};
  `};
`;

const SideMenu = styled.span`
  background: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadow.medium};
  padding: ${({theme}) => theme.space.xl}px;
  height: 100%;
  left: 0;
  top: 0;
  position: fixed;
  display: none;
  ${media.tablet`
    display: ${({hidden}) => hidden ? 'none' : 'block'};
  `};

  ${Button} {
    display: block;
    text-align: left;
    margin-top: 16px;
  }
`;

const Nav = styled.nav`
  $ > * {
    display: inline-block;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin-top: 2px;
`;


class Menu extends React.Component {
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
    [
      {title: 'Home', icon: 'Home', route: 'Home'},
      {title: 'Photos', icon: 'PhotoLibrary', route: 'Photos'},
      {title: 'Code', icon: 'CodeBox', route: 'Code'},
      {title: 'Stacker', icon: 'Stack', route: 'Stacker'},
    ].forEach(option => menu.push(
      <StyledLink key={option.route} to={`/${option.route}`}>
        <Button
          onClick={() => this.onClickOption(option.route)}
          color={selection === option.route ? 'primary' : 'negative'}
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
            onClick={this.onClickMenuButton}
            color={hideSideMenu ? 'negative' : 'primary'}
          />
          <MenuContent>{menu}</MenuContent>
          <MenuTitle>{selection}</MenuTitle>
          <SideMenuClose onClick={this.onClickMenuButton} hidden={hideSideMenu} />
          <SideMenu hidden={hideSideMenu}>{menu}</SideMenu>
          <SettingsButton
            onClick={this.onClickSettingsButton}
            color={selection === "Settings" ? 'primary' : 'negative'}
          />
        </Nav>
      </Header>
    )
  }
}

export default withRouter(Menu);
