import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Posts } from '../../Constants';
import Theme from '../../Themes';
import { ImageView } from '../Views';

class LibraryContent extends Component {

  onClickImage = (postIndex) => {
    console.log("go to post #", postIndex)
    this.props.history.push('/post/' + postIndex);
  }

  renderPost = (post, key) => {
    return (
      <ImageView
        key={key}
        src={post.img}
        style={Theme.getStyles().LibraryItem()}
        onClick={() => this.onClickImage(key)}
        scale={3}
        isSquare={true}
      />
    )
  }

  render() {
    let posts = [];
    for (let i = Posts.featured - 1; i >= 0; i--) {
      posts.push(this.renderPost(Posts[i], i))
    }
    return (
      <div style={Theme.getStyles().LibraryContent()}>
        <div style={Theme.getStyles().LibraryGrid()}>
            {posts}
        </div>
      </div>
    );
  }
}

export default withRouter(LibraryContent);
