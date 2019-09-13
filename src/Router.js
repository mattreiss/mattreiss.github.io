import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, HashRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import { MainActions } from './data/redux/actions';
import Home from './components/pages/Home';
import Theme from './theme';

class Router extends React.Component {

  componentDidMount() {
    this.props.init();
  }

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


const mapDispatchToProps = (dispatch) => {
  return {
    init: () => dispatch(MainActions.init()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Router);
