import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from './Redux';
import { Navigators } from './Components';
import { SetupLogger } from "./Tools";
import '../css/App.css';

class App extends React.Component {

  state = {
    key: "PersistenceKey-2.1.0"
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
          <Navigators.ScreenNavigator />
        </PersistGate>
      </Provider>
    )
  }
}

export default App;
