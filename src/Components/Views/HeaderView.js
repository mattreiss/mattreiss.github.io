import React, { Component } from 'react';
import Theme from '../../Themes';
import VideoView from './VideoView';

class HeaderView extends Component {
  render() {
    return (
      <header className="HeaderView">
        <VideoView src={Theme.getImages().headerVideo}/>
        <p>Tahoe</p>
      </header>
    );
  }
}

export default HeaderView;
