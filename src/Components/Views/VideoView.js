import React, { Component } from 'react';
// import Theme from '../../Themes';

class VideoView extends Component {
  render() {
    let { src, className } = this.props;
    return (
      <video
        className={"VideoView " + className}
        width="320"
        height="240"
        controls>
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
      </video>
    );
  }
}

export default VideoView;
