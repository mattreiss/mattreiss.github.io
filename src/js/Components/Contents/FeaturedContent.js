import React, { Component } from 'react';
import { Images } from '../../Constants';
import Theme from '../../Themes';
import { ImageView } from '../Views';

class FeaturedContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageIndex: 0,
    }
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
      imageIndex
    } = this.state;
    return (
      <div style={Theme.getStyles().FeaturedContent()}>
        <ImageView
          src={Images.list[imageIndex]}
          onClick={this.onClickImage}
          scale={1}
        />
      </div>
    );
  }
}

export default FeaturedContent;
