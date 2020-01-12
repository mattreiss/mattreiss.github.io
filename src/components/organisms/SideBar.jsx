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

const Title = styled.span`
  ${p => !p.open && 'display: none;'}
`;

const Aside = styled.aside`
  width: ${props => props.open ? (props.theme.headerHeight*3) : props.theme.headerHeight}px;
  padding: ${props => props.theme.space.medium}px;
  background: ${props => props.theme.colors.white};
  overflow: hidden;
  ${p => !p.open && media.phone`
    display: none;
  `}
  &:hover {
    width: ${p => p.theme.headerHeight*3}px;
  }
  &:hover ${Title} {
    display: initial;
  }
  
  ${media.phone`
    position: absolute;
    height: 100%;
  `};
`;

const Nav = styled.nav`
  $ > * {
    display: inline-flex;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin-top: 2px;
`;



class SideBar extends React.Component {
  state = {
    selection: 'Photos'
  }

  componentDidMount() {
    let selection = this.props.location.pathname;
    if (selection.length <= 1) selection = 'Home';
    console.log("selection", selection);
    this.setState({selection});
  }

  onClickOption = (selection) => {
    this.setState({
      selection
    })
  }

  render() {
    let { open } = this.props;
    let { selection } = this.state;
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
          color={selection === option.route ? 'primary' : 'negative'}
          fontSize="medium"
          pr="xl">
          <Nav>
            <Icon
              mr="medium"
              p="small"
              name={option.icon}
              size="medium"
            />
            <Title open={open}>
              {option.title}
            </Title>
          </Nav>
        </Button>
      </StyledLink>
    ));
    return (
      <Aside open={open}>
        <Nav>
          {menu}
        </Nav>
      </Aside>
    )
  }
}

export default withRouter(SideBar);
