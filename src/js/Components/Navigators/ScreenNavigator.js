import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom'
import { connect } from 'react-redux';
import { MainActions } from '../../Redux/Actions';
import Theme from '../../Themes';
import * as Screens from '../Screens';
import { AppBarView } from '../Views';

class ScreenNavigator extends React.Component {
  render() {
    return (
      <div>
        <HashRouter>
          <AppBarView />
          <Switch>
            <Route exact path='/' component={ Screens.MainScreen } />
            <Route exact path='/main' component={ Screens.MainScreen } />
            <Route exact path='/content' component={ Screens.ContentScreen } />
          </Switch>
        </HashRouter>
      </div>
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenNavigator)
