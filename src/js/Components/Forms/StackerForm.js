import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';

// import Theme from '../../Themes';

const BlendMode = {
  LIGHTEN: 8,
  DARKEN: 4,
  NORMAL: 2
}

class StackerForm extends Component {
  state = {
    selectedFolder: "",
    selectedFile: "",
    blendMode: BlendMode.LIGHTEN,
    effect: "commet",
    stackLength: 32,
    stackGrowth: 1,
    autoAlign: false,
    action: null,
    displacement: 1,
    video: "1080@24",
    delayLength: 0,
    step: 1,
  }

  onSubmit = () => {
    this.props.onSubmit(this.state);
  }

  renderDirectoryItem = (item, icon, isActive, onClick) => (
    <GridListTile key={item}>
      <Card
        style={{width: 250, height: 40, display: 'inline-block', cursor: 'pointer', textAlign: 'left', backgroundColor: isActive ? 'blue': 'white'}}
        onClick={onClick}>
        <div style={{display: 'inline-block'}}><Icon fontSize="large">{icon}</Icon></div>
        <div style={{display: 'inline-block', position: 'absolute', top: 10, paddingLeft: 10}}>{item}</div>
      </Card>
    </GridListTile>
  )

  renderDirectoryImage = (item, icon, isActive, onClick) => {
    let path =  (this.props.directory + "/" + item).replace("//", "/").replace("~","/Users/matt");
    return (
      <GridListTile key={item}>
        <img src={"http://localhost:1337/directory" + path} alt="" width="250px" />
      </GridListTile>
    )
  }

  renderDirectory = () => {
    let {
      folders,
      files,
      directory,
      onChangeDirectory
    } = this.props;
    return (
      <div>
        <GridList cellHeight={'auto'} style={{width: 520, margin: 'auto'}}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="div" style={{paddingBottom: 24}}>
              <TextField
                style={{width: '100%'}}
                onChange={e => onChangeDirectory(e.target.value)}
                value={directory}
                label="Source Directory"
              />
            </ListSubheader>
          </GridListTile>
          {folders.map(folder => folder && this.renderDirectoryItem(
            folder,
            "folder",
            this.state.selectedFolder === (directory+'/'+folder).replace("//", "/"),
            () => this.setState({selectedFolder: (directory+'/'+folder).replace("//", "/"), selectedFile: "", step: 2})
          ))}
          {files.map(file => file && file.toLowerCase().endsWith(".jpg") && this.renderDirectoryImage(
              file,
              "image",
              this.state.selectedFile === directory+'/'+file,
              () => this.setState({selectedFile: directory+'/'+file, selectedFolder: ""})
          ))}
        </GridList>
      </div>
    )
  }

  renderSelectInput = (key, title, options) => (
    <div style={{padding: 10}}>
      <FormControl style={{width: 200}}>
        <InputLabel htmlFor={key}>{title}</InputLabel>
        <Select
          value={this.state[key] == null ? '' : this.state[key]}
          onChange={e => e.target.value && e.target.value.length ? this.setState({ [key]: e.target.value}): this.setState({ [key]: null})}
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

  renderOptions = () => {
    return (
      <div>
        <div style={{padding: 10}} onClick={() => this.setState({step: 1})}>
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
          {title: 'Normal', value: 'normal'},
        ])}
        {this.renderSelectInput('stackGrowth', 'Growth', [
          {title: 'Growth', value: 1},
          {title: 'Decay', value: 2},
          {title: 'Growth & Decay', value: 3},
          {title: "None", value: null},
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
            onChange={e => this.setState({ displacement: e.target.value})}
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
            onChange={e => this.setState({ stackLength: e.target.value})}
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
                onChange={(e) => this.setState({autoAlign: e.target.checked})}
                value="autoAlign"
                color="primary"
              />
            }
            label="Auto Align Images"
          />
        </div>
        <div>
          <Button
            onClick={this.onSubmit}
            variant="contained"
            color="primary"
            style={{}}>
            Submit
          </Button>
        </div>
      </div>
    )
  }

  render() {
    switch (this.state.step) {
      default:
      case 1: return this.renderDirectory();
      case 2: return this.renderOptions();
    }
  }
}

export default StackerForm;
