import React from 'react';
import { connect } from 'react-redux';
import { ScreenView } from '../Views';
import { MainActions } from '../../Redux/Actions';
import { Posts } from '../../Constants';
// import Theme from '../../Themes';

class PostScreen extends React.Component {
  getPost() {
    let path = this.props.location.pathname;
    let postIndex = path.substring(path.lastIndexOf('/') + 1);
    return Posts[postIndex];
  }

  render() {
    let post = this.getPost();
    if (!post) {
      return (
        <ScreenView>
          Post Deleted!
        </ScreenView>
      )
    }
    return (
      <ScreenView>
        <h1>{post.title}</h1>
        <img alt=""
          src={post.img}
          width="100%"
        />
      </ScreenView>
    );
  }
}

const mapStateToProps = (state) => {
  let { screen } = state.main
  return {
    main: { screen }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showScreen: (screen, screenProps) => dispatch(MainActions.showScreen(screen, screenProps))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostScreen)
