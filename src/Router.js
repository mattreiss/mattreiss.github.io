import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Route, HashRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import { MainActions } from './data/redux/actions';
import * as Pages from './components/pages';
import MainMenu from './components/elements/MainMenu';
// import Theme from './theme';

const Container = styled.div`
  background-color: ${props => props.theme.colors.light};
  width: 100%;
  height: 100%;
  position: fixed;
  overflow-y: scroll;
`;

const withMainMenu = (Component, theme) => () => {
  // console.log("theme", theme);
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <MainMenu />
        <Component />
      </Container>
    </ThemeProvider>
  )
}

class Router extends React.Component {

  componentDidMount() {
    // this.props.init();
  }

  render() {
    let { theme } = this.props.main;
    // let theme = Theme.self
    let routes = [];
    // eslint-disable-next-line
    for (let page in Pages) {
      let PageComponent = Pages[page];
      routes.push(
        <Route key={page}
          path={`/${page}`}
          component={withMainMenu(PageComponent, theme)} />
      )
    }
    return (
      <HashRouter>
        <Switch>
          <Route exact key={1}
            path={"/"}
            component={withMainMenu(Pages.Home, theme)} />
          {routes}
        </Switch>
      </HashRouter>
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
