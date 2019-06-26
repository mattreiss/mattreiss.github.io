import React from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import { ScreenView } from '../Views';
import { FormNavigator } from '../Navigators';
import { MainActions } from '../../Redux/Actions';
// import Theme from '../../Themes';

class WebCrawlerScreen extends React.Component {
  state = {
    connected: false,
    loading: false
  }

  componentDidMount() {
    var socket = io('http://localhost:1338');
    socket.on('connect', () => {
      console.log("connected");
      this.setState({connected: true})
    });
    socket.on('result', function(result){ console.log("result ", result)});
    socket.on('disconnect', () => {
      console.log("disconnected");
      this.setState({connected: false})
    });
    let { directory } = this.props.main;
    this.props.list(directory);
  }

  onClickLogin = () => {
    this.props.runWebCrawler("login", {
      "username": "mattreiss",
      "password": "p0p0p0"
    });
  }

  onClickGetFollowers = () => {
    this.props.runWebCrawler("getFollows", {
      "username": "mattreiss",
    });
  }

  onClickFollow = () => {
    this.props.runWebCrawler("follow", {
      "username": "paulClark",
      "shouldUnfollow": false
    });
  }

  renderConnectInstructions() {
    return (
      <ScreenView>
        <div style={{marginTop: 100}}>
          <h1>Server Not found</h1>
          <p>Please start the webrawler server</p>
        </div>
      </ScreenView>
    );
  }

  renderLoading() {
    return (
      <ScreenView>
        <div style={{marginTop: 100}}>
          <h1>Loading..</h1>
          <p>Please wait while photoshop processes</p>
        </div>
      </ScreenView>
    )
  }

  render() {
    if (!this.state.connected) return this.renderConnectInstructions();
    if (this.state.loading) return this.renderLoading();
    let {files, folders, directory} = this.props.main;
    return (
      <ScreenView>
        <div style={{marginTop: 100}}>
          <div>
            <button onClick={this.onClickLogin}>Login</button>
            <button onClick={this.onClickGetFollowers}>GetFollowers</button>
            <button onClick={this.onClickFollow}>Follow</button>
          </div>
        </div>
      </ScreenView>
    );
  }
}

const mapStateToProps = (state) => {
  let { directory, folders, files } = state.main
  return {
    main: { directory, folders, files }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    runWebCrawler: (command, options) => dispatch(MainActions.runWebCrawler(command, options)),
    list: (directory) => dispatch(MainActions.list(directory))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WebCrawlerScreen)
