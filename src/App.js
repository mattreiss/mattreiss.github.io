import React, { Component } from 'react';
import { Screens } from './Components';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Screens.MainScreen />
      </div>
    );
  }
}

export default App;
