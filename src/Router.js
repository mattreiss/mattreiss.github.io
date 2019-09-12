import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, HashRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import Home from './components/pages/Home';

class Router extends React.Component {

  render() {
    let { main } = this.props;
    console.log("redux main", main)
    return (
      <ThemeProvider theme={main.theme}>
        <HashRouter>
          <Switch>
            <Route exact key={1}
              path={"/"}
              component={ Home } />
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

export default connect(mapStateToProps)(Router);
