import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { Menu } from '../../Constants';
import Theme from '../../Themes';
import MainToolBar from './MainToolBar';

class MyAppBar extends React.Component {
  state = {
    value: 0,
    menuDrawer: false
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }


  handleChange = (event, value) => {
    this.setState({ value });
  };

  menuOpen = (event) => {
    this.setState({ menuDrawer: true });
  }

  menuClose = (event) => {
    this.setState({ menuDrawer: false });
  }

  onMouseEnter = () => {
    this.setState({ showAppBar: true });
  }

  onMouseLeave = () => {
    this.setState({ showAppBar: false });
  }

  currentMenuItem = () => {
    console.log("this.props.history.location", this.props.history.location)
    for (let i in Menu) {
      let menuItem = Menu[i];
      if (this.props.location.pathname === menuItem.path) {
        return menuItem;
      }
    }
    return null;
  }

  render() {
    // let { showAppBar } = this.state;
    let menuItems = [];
    Menu.forEach((item, index) => {
      menuItems.push(
        <ListItem button
          component={Link}
          to={{pathname: item.path}}
          onClick={this.menuClose}
          key={item.label}>
          <ListItemText primary={item.label} />
        </ListItem>
      )
    })
    return (
      <AppBar
        style={Theme.getStyles().AppBar()}
        color="default"
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}>
        <MainToolBar
          currentMenuItem={this.currentMenuItem()}
          onClickMenu={this.menuOpen}
          menu={(
            <SwipeableDrawer anchor="left"
              open={this.state.menuDrawer}
              onClose={this.menuClose}
              onOpen={this.menuOpen}>
              <List>{menuItems}</List>
            </SwipeableDrawer>
          )} />
      </AppBar>
    )
  }
}

export default withRouter(MyAppBar);
