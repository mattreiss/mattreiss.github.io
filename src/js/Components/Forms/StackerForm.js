import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

// import Theme from '../../Themes';

const BlendMode = {
  LIGHTEN: 8,
  DARKEN: 4,
  NORMAL: 2
}

class StackerForm extends Component {
  state = {
    blendMode: BlendMode.LIGHTEN,
    effect: "tile",
    stackLength: 12,
    stackGrowth: 1,
    autoAlign: false,
    action: null,
    displacement: 1,
    video: "1080@24",
    delayLength: 0,
    growEvery: 2,
    stackOnce: true
  }

  componentDidMount() {
    this.onChange(this.state);
  }

  onSubmit = () => {
    this.props.onSubmit(this.state);
  }

  onChange = (data) => {
    this.setState(data);
    this.props.onChange(data);
  }

  renderSelectInput = (key, title, options) => (
    <div style={{padding: 10}}>
      <FormControl style={{width: 200}}>
        <InputLabel htmlFor={key}>{title}</InputLabel>
        <Select
          value={this.state[key] == null ? '' : this.state[key]}
          onChange={e => this.onChange({ [key]: e.target.value}) }
          inputProps={{
            name: key,
            id: key,
          }}>
          {options.map(option => (
            <MenuItem key={option.title} value={option.value}>{option.title}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )

  render() {
    return (
      <div>
        <div style={{padding: 10}} onClick={() => this.onChange({step: 1})}>
          <InputLabel><b><u>{this.state.selectedFolder}</u></b></InputLabel>
        </div>
        {this.renderSelectInput('blendMode', "Blend Mode", [
          {title: 'Lighten', value: BlendMode.LIGHTEN},
          {title: 'Darken', value: BlendMode.DARKEN},
          {title: 'Normal', value: BlendMode.NORMAL},
        ])}
        {this.renderSelectInput('effect', 'Effect', [
          {title: 'Commet', value: 'commet'},
          {title: 'Reverse Commet', value: 'reverseCommet'},
          {title: 'Tile', value: 'tile'},
          {title: 'TileBend', value: 'tileBend'},
          {title: 'Reverse Tile', value: 'reverseTile'},
          {title: 'Normal', value: 'normal'},
        ])}
        {this.renderSelectInput('stackGrowth', 'Growth', [
          {title: 'Growth', value: 1},
          {title: 'Decay', value: 2},
          {title: 'Growth & Decay', value: 3},
          {title: "None", value: 0},
        ])}
        {this.renderSelectInput('video', 'Export Video', [
          {title: '720p @24fps', value: '720@24'},
          {title: '720p @30fps', value: '720@30'},
          {title: '720p @60fps', value: '720@60'},
          {title: '1080p @24fps', value: '1080@24'},
          {title: '1080p @30fps', value: '1080@30'},
          {title: '1080p @60fps', value: '1080@60'},
          {title: '2304p @24fps', value: '2304@24'},
          {title: "None", value: null},
        ])}
        {this.renderSelectInput('action', 'Stacker Action', [
          {title: 'Action', value: 'Action'},
          {title: "None", value: null},
        ])}
        <div>
          <TextField
            label="Frame Displacement"
            value={this.state.displacement}
            onChange={e => this.onChange({ displacement: e.target.value})}
            type="number"
            InputLabelProps={{
             shrink: true,
            }}
            inputProps={{
              min: "1",
              max: "10",
              step: "1"
            }}
            margin="normal"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            label="Stack Length"
            value={this.state.stackLength}
            onChange={e => this.onChange({ stackLength: e.target.value})}
            type="number"
            InputLabelProps={{
             shrink: true,
            }}
            inputProps={{
              min: "1",
              max: "500",
              step: "4"
            }}
            margin="normal"
            variant="outlined"
          />
        </div>
        <div>
          <FormControlLabel
            control={
              <Switch
                checked={this.state.autoAlign}
                onChange={(e) => this.onChange({autoAlign: e.target.checked})}
                value="autoAlign"
                color="primary"
              />
            }
            label="Auto Align Images"
          />
        </div>
        <div>
          <FormControlLabel
            control={
              <Switch
                checked={this.state.stackOnce}
                onChange={(e) => this.onChange({stackOnce: e.target.checked})}
                value="stackOnce"
                color="primary"
              />
            }
            label="Stack Once"
          />
        </div>
      </div>
    )
  }
}

export default StackerForm;
