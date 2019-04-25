import React from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import { ScreenView } from '../Views';
import { MainActions } from '../../Redux/Actions';
// import Theme from '../../Themes';

class CMSScreen extends React.Component {
  componentDidMount() {
    var socket = io('http://localhost:1337');
    socket.on('connect', function(){ console.log("connected to socket")});
    socket.on('result', function(result){ console.log("result ", result)});
    socket.on('disconnect', function(){});
  }

  onClickRun = () => {
    console.log("running stacker");
    this.props.run("Stacker", ["arg1", "arg2", "arg3", "arg4"]);
  }

  render() {
    return (
      <ScreenView>
        <div style={{marginTop: 60}}>
          <button onClick={this.onClickRun}>Run Stacker</button>
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
