import React, { Component } from 'react';
import { ScreenView, VideoView, FilmStripView } from '../Views';
import { Images } from '../../Constants';
import Theme from '../../Themes';

class MainScreen extends Component {
  render() {
    return (
      <ScreenView className="MainScreen" style={Theme.getStyles().MainScreen()}>
        <img
          className="spin"
          src={Images.logo}
          alt="logo"
          width="160"
          height="120"
        />
        <VideoView src={Images.mainVideo}/>
        <p>Tahoe</p>
        <FilmStripView images={Images.list} />
      </ScreenView>
    );
  }
}

export default MainScreen;
