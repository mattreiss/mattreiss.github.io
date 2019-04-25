import React from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import { ScreenView } from '../Views';
import { StackerForm } from '../Forms';
import { MainActions } from '../../Redux/Actions';
// import Theme from '../../Themes';

class CMSScreen extends React.Component {
  componentDidMount() {
    var socket = io('http://localhost:1337');
    socket.on('connect', function(){ console.log("connected to socket")});
    socket.on('result', function(result){ console.log("result ", result)});
    socket.on('disconnect', function(){});
  }

  onSubmitStackerForm = (form) => {
    console.log("running stacker", form);
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
    return (
      <ScreenView>
        <div style={{marginTop: 100}}>
          <StackerForm onSubmit={this.onSubmitStackerForm} />
        </div>
      </ScreenView>
    );
  }
}

const mapStateToProps = (state) => {
  // let {  } = state.main
  return {
    main: {  }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    run: (command, args) => dispatch(MainActions.run(command, args))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CMSScreen)
