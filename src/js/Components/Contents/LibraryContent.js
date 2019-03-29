import React, { Component } from 'react';
import { Images } from '../../Constants';
import Theme from '../../Themes';
import { ImageView } from '../Views';

class LibraryContent extends Component {

  onclickImage = () => {

  }

  renderItem = (src) => {
    return (
      <ImageView
        key={src}
        src={src}
        style={Theme.getStyles().LibraryItem()}
        onClick={this.onClickImage}
        scale={3}
        isSquare={true}
      />
    )
  }

  render() {
    return (
      <div style={Theme.getStyles().LibraryContent()}>
        <div style={Theme.getStyles().LibraryGrid()}>
            {Images.list.map(this.renderItem)}
        </div>
      </div>
    );
  }
}

export default LibraryContent;
