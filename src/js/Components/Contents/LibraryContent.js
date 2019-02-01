import React, { Component } from 'react';
import { Images } from '../../Constants';
import Theme from '../../Themes';

class LibraryContent extends Component {

  onLoadImage = (src) => {
    let img = new Image();
    img.onload = () => {
        this.aspectRatio = img.height / img.width;
        // console.log("onload", this.aspectRatio, src);
    }
    img.src = src;
  }

  renderItem = (src) => {
    let size = Theme.getStyles().buttonWidth.l;
    return (
      <div key={src} style={Theme.getStyles().LibraryItem(size)}>
        <img
          src={src}
          alt=""
          onLoad={() => this.onLoadImage(src)}
          height={size}
        />
      </div>
    )
  }

  render() {
    return (
      <div style={Theme.getStyles().LibraryContent()}>
        <div style={Theme.getStyles().LibraryTitle()}>
          Library
        </div>
        <div style={Theme.getStyles().LibraryGrid()}>
            {Images.list.map(this.renderItem)}
        </div>
      </div>
    );
  }
}

export default LibraryContent;
