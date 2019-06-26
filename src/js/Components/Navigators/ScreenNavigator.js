import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
// import { MainActions } from '../../Redux/Actions';
import { Posts, Menu } from '../../Constants';
import * as Screens from '../Screens';

class ScreenNavigator extends React.Component {

  render() {
    let routes = [];
    Menu.forEach((item, index) => {
      routes.push(
        <Route exact key={index}
          path={item.path}
          component={ Screens[item.screen] } />
      )
    })
    for (let i = Posts.featured; i >= 0; i--) {
      routes.push(
        <Route exact key={i}
          path={"/post/" + i}
          component={ Screens.PostScreen } />
      )
    }
    routes.push(
      <Route exact key={-1}
        path={"/stacker"}
        component={ Screens.StackerScreen } />
    )
    routes.push(
      <Route exact key={-2}
        path={"/webcrawler"}
        component={ Screens.WebCrawlerScreen } />
    )
    return (
      <HashRouter>
        <Switch>{routes}</Switch>
      </HashRouter>
    )
  }
}

const mapStateToProps = (state) => {
  // let { screen } = state.main
  return {
    main: {  }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenNavigator)
