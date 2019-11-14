import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Route, HashRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import { MainActions } from '../data/redux/actions';
import * as Pages from './pages';
// import Theme from '../theme';


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: Roboto;
  }

  body {
    margin: 0;
    background-color: ${p => p.theme.colors.light};
  }
`

class Router extends React.Component {

  componentDidMount() {
    // this.props.init();
  }

  render() {
    let { theme } = this.props.main;
    console.log("render theme", theme);
    // let theme = Theme.self
    let routes = [];
    // eslint-disable-next-line
    for (let page in Pages) {
      let PageComponent = Pages[page];
      routes.push(
        <Route key={page}
          path={`/${page}`}
          component={PageComponent} />
      )
    }
    return (
      <ThemeProvider theme={theme}>
        <HashRouter>
          <Switch>
            <Route exact key={1}
              path={"/"}
              component={Pages.Photos} />
            {routes}
          </Switch>
        </HashRouter>
        <GlobalStyle />
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
