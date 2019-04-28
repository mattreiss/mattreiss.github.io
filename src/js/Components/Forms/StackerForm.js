import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
// import Theme from '../../Themes';

const BlendMode = {
  LIGHTEN: 8,
  DARKEN: 4,
  NORMAL: 2
}

class StackerForm extends Component {
  state = {
    selectedFolder: "",
    blendMode: BlendMode.LIGHTEN,
    effect: "commet",
    stackLength: 32,
    stackGrowth: 1,
    autoAlign: false,
    action: null,
    displacement: 1,
    video: "1080@24",
    delayLength: 0
  }

  onSubmit = () => {
    this.props.onSubmit(this.state);
  }

  render() {
    let { folders, files, onChangeDirectory } = this.props;
    return (
      <div>
        <TextField
          onChange={e => onChangeDirectory(e.target.value)}
          value={this.props.directory}
          label="Source Directory"
        />
        {folders.map(folder => (
          <div
            key={folder}
            onClick={() => this.setState({selectedFolder: this.state.directory+'/'+folder})}>
            {folder}
          </div>
        ))}
        {files.map(file => (
          <div key={file}>{file}</div>
        ))}
        <button onClick={this.onSubmit}>Stack</button>
      </div>
    );
  }
}

export default StackerForm;
