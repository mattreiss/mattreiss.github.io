import React from 'react';
import { createGlobalStyle } from 'styled-components'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from './data/redux';
import { SetupLogger } from "./tools";
import Router from './Router';
import "./css/prism.css";



const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }
`

export default class App extends React.Component {

  state = {
    key: "persist-key-0"
  }

  constructor(props) {
    super(props);
    SetupLogger.init()
  }

  componentDidCatch(error,errorInfo) {
    this.setState({
      key: this.state.key + ".0"
    })
  }

  renderLoading() {
    return (
      <div>Loading...</div>
    )
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={this.renderLoading()} persistor={persistor}>
          <Router />
          <GlobalStyle />
        </PersistGate>
      </Provider>
    )
  }
}
