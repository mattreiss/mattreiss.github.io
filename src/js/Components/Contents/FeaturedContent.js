import React, { Component } from 'react';
import { Images } from '../../Constants';
import Theme from '../../Themes';
import { ScreenView } from '../Views';


class FeaturedContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width:  window.innerWidth,
      height: window.innerHeight,
      imageIndex: 0,
    }
  }

  /**
  * Calculate & Update state of new dimensions
  */
  updateDimensions() {
    let img = new Image();
    img.onload = () => {
      let w = window.innerWidth;
      let h = window.innerHeight;
      console.log("window dimensions", w, h);
      console.log("img dimensions", img.width, img.height);
      let dw = Math.abs(w - img.width);
      let dh = Math.abs(h - img.height);
      if (dw < dh) {
        h = w * img.height / img.width;
      } else {
        w = h * img.width / img.height;
      }
      this.setState({
        width: w,
        height: h,
      })
    }
    img.src = this.img.src;
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
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
    let { width, height, imageIndex } = this.state;
    return (
      <div style={Theme.getStyles().FeaturedContent()}>
        <img
          ref={(ref) => this.img = ref}
          src={Images.list[imageIndex]}
          onClick={this.onClickImage}
          width={width}
          height={height} />
      </div>
    );
  }
}

export default FeaturedContent;
