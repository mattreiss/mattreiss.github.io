import React from 'react';
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

class MainMenu extends React.Component {
  state = {
    selection: 'Home',
    hideSideMenu: true
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
      'Skate',
      'About',
      'Contact'
    ].forEach(option => menu.push(
        <TextButton
          key={option}
          onClick={() => this.onClickOption(option)}
          negative={selection != option}
          primary={selection == option}
          large={selection == option}>
          {option}
        </TextButton>
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

export default MainMenu;
