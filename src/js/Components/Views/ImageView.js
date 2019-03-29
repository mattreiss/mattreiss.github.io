import React, { Component } from 'react';
import Theme from '../../Themes';

class ImageView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marginLeft: 0,
      marginTop: 0,
      width: 0,
      height: 0,
    }
  }

  updateDimensions = () => {
    if (!this.aspectRatio) return;
    let {
      width,
      height,
      marginLeft,
      marginTop
    } = this.state;
    let { scale, isSquare } = this.props;
    let w = window.innerWidth / scale;
    let h = window.innerHeight / scale;
    if (isSquare) h = w;

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
    let { src } = this.props;
    let img = new Image();
    img.onload = () => {
        this.aspectRatio = img.height / img.width;
        this.updateDimensions();
    }
    img.src = src;
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    let {
      src,
      onClick,
      style,
      scale
    } = this.props;
    let {
      width,
      height,
      marginLeft,
      marginTop
    } = this.state;
    if (!style) style = {};
    style.width = window.innerWidth / scale;
    style.height = style.width;
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    return (
      <div
        ref={(ref) => this.container = ref}
        style={Theme.getStyles().ImageViewContainer(style)}>
        <img
          ref={(ref) => this.img = ref}
          onLoad={this.onLoadImage}
          src={src} alt=""
          onClick={onClick}
          style={Theme.getStyles().ImageView({ marginLeft, marginTop })}
          width={width}
          height={height} />
      </div>
    );
  }
}

export default ImageView;
