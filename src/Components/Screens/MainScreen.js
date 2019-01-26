import React, { Component } from 'react';
import { ScreenView, VideoView } from '../Views';
import Theme from '../../Themes';

class MainScreen extends Component {
  render() {
    return (
      <ScreenView className="MainScreen">
        <img
          className="spin"
          src={Theme.getImages().logo}
          alt="logo"
          width="160"
          height="120"
        />
        <VideoView src={Theme.getImages().mainVideo}/>
        <p>Tahoe</p>
      </ScreenView>
    );
  }
}

export default MainScreen;
