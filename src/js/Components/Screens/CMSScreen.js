import React from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import { ScreenView } from '../Views';
import { FormNavigator } from '../Navigators';
import { MainActions } from '../../Redux/Actions';
// import Theme from '../../Themes';

class CMSScreen extends React.Component {
  componentDidMount() {
    var socket = io('http://localhost:1337');
    socket.on('connect', function(){ console.log("connected to socket")});
    socket.on('result', function(result){ console.log("result ", result)});
    socket.on('disconnect', function(){});
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
  }


  render() {
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
