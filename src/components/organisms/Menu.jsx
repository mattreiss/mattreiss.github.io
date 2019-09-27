import React from 'react';
import styled from 'styled-components';
import {
  Link,
  withRouter
} from 'react-router-dom';
import { media } from '../../tools/StyledUtils';
import {
  Button
} from '../atoms';
import {
  IconButton
} from '../molecules';

const Header = styled.header`
  width: 100%;
  padding: ${props => props.theme.space.xl}px;
  background: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadow.medium};
  position: relative;
  ${media.desktop`
    padding: ${props => props.theme.space.large}px;
  `};
  ${media.phone`
    padding: ${props => props.theme.space.medium}px;
  `};
`;

const MenuContent = styled.span`
  display: inline-block;
  ${media.tablet`
    display: none;
  `};
  ${media.phone`
    display: none;
  `};

  & > * {
  }
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
  }
`;

const Nav = styled.nav`
  $ > * {
    display: inline-block;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
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
    [ 'Home',
      'Photos',
      'Code',
      // 'Skate',
      // 'About',
      // 'Contact'
    ].forEach(option => menu.push(
      <StyledLink key={option} to={`/${option}`}>
        <Button
          onClick={() => this.onClickOption(option)}
          color={selection === option ? 'primary' : 'negative'}
          fontSize="medium"
          pr="xl">
          {option}
        </Button>
      </StyledLink>
    ));
    return (
      <Header>
        <Nav>
          <IconButton
            name="Menu"
            onClick={this.onClickMenuButton}
            color={hideSideMenu ? 'negative' : 'primary'}
          />
          <MenuContent>{menu}</MenuContent>
          <SideMenuClose onClick={this.onClickMenuButton} hidden={hideSideMenu} />
          <SideMenu hidden={hideSideMenu}>{menu}</SideMenu>
          <IconButton
            name="Settings"
            onClick={this.onClickSettingsButton}
            color={selection === "Settings" ? 'primary' : 'negative'}
          />
        </Nav>
      </Header>
    )
  }
}

export default withRouter(Menu);
