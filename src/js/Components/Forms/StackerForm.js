import React, { Component } from 'react';
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
    stackLength: 4,
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
    return (
      <div>
        <input
          type="text"
          val={this.state.selectedFolder}
          onChange={e => this.setState({selectedFolder: e.target.value})}
          placeholder="timelapse directory"
          name="selectedFolder" />
        <button onClick={this.onSubmit}>Stack</button>
      </div>
    );
  }
}

export default StackerForm;
