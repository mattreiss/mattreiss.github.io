import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, HashRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import { MainActions } from './data/redux/actions';
import * as Pages from './components/pages';
import MainMenu from './components/elements/MainMenu';
// import Theme from './theme';

const withMainMenu = (Component, name) => () => {
  return (
    <div>
      <MainMenu />
      <Component selection={name}/>
    </div>
  )
}

class Router extends React.Component {

  componentDidMount() {
    this.props.init();
  }

  render() {
    let { main } = this.props;
    let routes = [];
    for (let page in Pages) {
      let PageComponent = Pages[page];
      routes.push(
        <Route key={page}
          path={`/${page}`}
          component={withMainMenu(PageComponent, page)} />
      )
    }
    return (
      <ThemeProvider theme={main.theme}>
        <HashRouter>
          <Switch>
            <Route exact key={1}
              path={"/"}
              component={withMainMenu(Pages.Home)} />
            {routes}
          </Switch>
        </HashRouter>
      </ThemeProvider>
    )
  }
}

const mapStateToProps = (state) => {
  let { theme } = state.main
  return {
    main: { theme }
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    init: () => dispatch(MainActions.init()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Router);
