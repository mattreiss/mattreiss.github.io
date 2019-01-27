import React, { Component } from 'react';
import Theme from '../../Themes';

class FilmStripView extends Component {

  renderImage(src) {
    return (
      <img
        className="FilmStripViewImage"
        key={src}
        src={src}
        alt=""
        width="100"
        height="100"
      />
    )
  }

  render() {
    let { images, className } = this.props;
    let imageList = images.map(this.renderImage);
    return (
      <div
        className={"FilmStripView " + className}
        style={Theme.getStyles().FilmStripView()}>
        {imageList}
      </div>
    );
  }
}

export default FilmStripView;
