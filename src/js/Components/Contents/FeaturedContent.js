import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Posts } from '../../Constants';
import Theme from '../../Themes';
import { ImageView } from '../Views';

class FeaturedContent extends Component {

  onClickImage = () => {
    console.log("go to post #", Posts.featured)
    this.props.history.push('/post/' + Posts.featured);
  }

  render() {
    let featuredPost = Posts[Posts.featured];
    return (
      <div style={Theme.getStyles().FeaturedContent()}>
        <ImageView
          src={featuredPost.img}
          onClick={this.onClickImage}
          scale={1}
        />
      </div>
    );
  }
}

export default withRouter(FeaturedContent);
