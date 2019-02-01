import React, { Component } from 'react';
import { Images } from '../../Constants';
import Theme from '../../Themes';


class FeaturedContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marginLeft: 0,
      marginTop: 0,
      width:  window.innerWidth,
      height: window.innerHeight,
      imageIndex: 0,
    }
  }

  updateDimensions = () => {
    if (!this.aspectRatio) return;
    let w = window.innerWidth;
    let h = window.innerHeight;
    let { width, height, marginLeft, marginTop } = this.state;

    width = w;
    height = w * this.aspectRatio;
    if (height < h) {
      width = h / this.aspectRatio;
      height = h;
      marginLeft = -0.5 * Math.abs(width - w);
      marginTop = 0;
    } else {
      marginLeft = 0;
      marginTop = -0.5 * Math.abs(height - h);
    }

    this.setState({ width, height, marginLeft, marginTop });
  }

  onLoadImage = () => {
    let { imageIndex } = this.state;
    let img = new Image();
    img.onload = () => {
        this.aspectRatio = img.height / img.width;
        // console.log("onload", this.aspectRatio);
        this.updateDimensions();
    }
    img.src = Images.list[imageIndex];
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  onClickImage = () => {
    let { imageIndex } = this.state;
    imageIndex++;
    if (Images.list.length <= imageIndex) {
      imageIndex = 0;
    }
    this.setState({ imageIndex });
  }

  render() {
    let {
      width,
      height,
      marginLeft,
      marginTop,
      imageIndex
    } = this.state;
    return (
      <div style={Theme.getStyles().FeaturedContent()}>
        <img
          ref={(ref) => this.img = ref}
          src={Images.list[imageIndex]}
          alt=""
          onClick={this.onClickImage}
          onLoad={this.onLoadImage}
          style={{ marginLeft, marginTop }}
          width={width}
          height={height} />
      </div>
    );
  }
}

export default FeaturedContent;
