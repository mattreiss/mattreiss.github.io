import React from 'react';
import { Route, HashRouter, Switch, Link } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { connect } from 'react-redux';
import { MainActions } from '../../Redux/Actions';
import { Menu } from '../../Constants';
import Theme from '../../Themes';
import * as Screens from '../Screens';

class ScreenNavigator extends React.Component {
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

  current = () => {
    for (let i in Menu) {
      let menuItem = Menu[i];
      if (this.props.location.pathname === menuItem.pathname) {
        return parseInt(i);
      }
    }
    return 0;
  }

  render() {
    let routes = [];
    let listItems = [];
    Menu.forEach((item, index) => {
      routes.push(
        <Route exact key={index}
          path={item.path}
          component={ Screens[item.screen] } />
      )
      listItems.push(
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
      <HashRouter>
        <Switch>{routes}</Switch>
        <AppBar
          style={Theme.getStyles().AppBar()}
          color="default">
          <Toolbar>
            <IconButton onClick={this.menuOpen} color="inherit">
              <Icon>menu</Icon>
            </IconButton>
            <Typography
              variant="h6"
              color="inherit">
              Portfolio
            </Typography>
            <SwipeableDrawer anchor="left"
              open={this.state.menuDrawer}
              onClose={this.menuClose}
              onOpen={this.menuOpen}>
              <List>{listItems}</List>
            </SwipeableDrawer>
          </Toolbar>
        </AppBar>
      </HashRouter>
    )
  }
}

const mapStateToProps = (state) => {
  let { screen } = state.main
  return {
    main: { screen }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showScreen: (screen, screenProps) => dispatch(MainActions.showScreen(screen, screenProps))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenNavigator)
