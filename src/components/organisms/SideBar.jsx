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


const Aside = styled.aside`
  height: 100%;
  width: ${props => props.open ? (props.theme.headerHeight*3) : props.theme.headerHeight}px;
  padding: ${props => props.theme.space.medium}px;
  background: ${props => props.theme.colors.white};
  position: relative;
  overflow: hidden;
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


class SideBar extends React.Component {
  state = {
    selection: 'Photos'
  }

  componentDidMount() {
    let selection = this.props.location.pathname.substring(1);
    if (selection.length <= 1) selection = 'Home';
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
          <Icon
            mr="medium"
            p="small"
            name={option.icon}
            size="medium"
          />
          {!open ? '' : option.title}
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
