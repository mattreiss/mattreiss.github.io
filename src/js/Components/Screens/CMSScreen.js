import React from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import { ScreenView } from '../Views';
import { FormNavigator } from '../Navigators';
import { MainActions } from '../../Redux/Actions';
// import Theme from '../../Themes';

class CMSScreen extends React.Component {
  state = {
    connected: false,
    loading: false
  }

  componentDidMount() {
    var socket = io('http://localhost:1337');
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

  onSubmitCompressForm = () => {
    this.props.run("Compress", [
      '/Users/matt/Desktop',
      'DSC06960.JPG',
      '~/Dev/mattreiss.github.io/src/assets/jpg',
      7
    ]);
  }


  onSubmitStackerForm = (form) => {
    let formString =  JSON.stringify(form);
    for (let key in form) {
      formString = formString.replace('"' + key + '"', key)
    }
    this.props.run("Stacker", [
      form.selectedFolder,
      formString
    ]);
    this.setState({loading: true});
  }

  renderConnectInstructions() {
    return (
      <ScreenView>
        <div style={{marginTop: 100}}>
          <h1>Server Not found</h1>
          <p>Please start the stacker server</p>
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
          <FormNavigator  />
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
    run: (command, args) => dispatch(MainActions.run(command, args)),
    list: (directory) => dispatch(MainActions.list(directory))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CMSScreen)
