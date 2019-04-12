import React, { Component } from 'react';
import ImageView from './ImageView';
import VideoView from './VideoView';

class MediaView extends Component {
  isVideo() {
    let { src } = this.props;
    return src && (
      src.endsWith(".mp4") ||
      src.endsWith(".m4v") ||
      src.endsWith(".mov")
    )
  }
  render() {
    let { src, fill } = this.props;
    if (fill) {
      return this.isVideo() ? (
        <video
          width="100%"
          ref={(ref) => this.video = ref}
          autoPlay="autoplay" loop>
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
      ) : (
        <img alt=""
          src={src}
          width="100%"
        />
      )
    }
    return this.isVideo() ? (
      <VideoView {...this.props} />
    ) : (
      <ImageView {...this.props} />
    )
  }
}

export default MediaView;
