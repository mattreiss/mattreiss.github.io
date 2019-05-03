import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import { Api } from '../../Tools';


class DirectoryForm extends Component {
  state = {
    selectedFolder: "",
    selectedFile: "",
  }

  onChange = (data) => {
    this.setState(data);
    this.props.onChange(data);
  }

  onDoubleClick = (item) => {
    let { onChangeDirectory, directory } = this.props;
    let nextDirectory = (directory + "/" + item).replace("//", "/");
    if (item == "..") {
      let lastSlash = directory.lastIndexOf("/");
      let firstSlash = directory.indexOf("/");
      if (lastSlash != firstSlash) {
        nextDirectory = directory.substring(0, lastSlash);
      } else {
        return;
      }
    }
    onChangeDirectory(nextDirectory)
  }

  renderDirectoryItem = (item, icon, isActive, onClick) => (
    <GridListTile cols={2} key={item}>
      <Card
        style={{width: '99%', height: 40, display: 'inline-block', cursor: 'pointer', textAlign: 'left', backgroundColor: isActive ? 'yellow': 'white'}}
        onClick={onClick}
        onDoubleClick={() => this.onDoubleClick(item)}>
        <div style={{display: 'inline-block'}}><Icon fontSize="large">{icon}</Icon></div>
        <div style={{display: 'inline-block', position: 'absolute', top: 10, paddingLeft: 10}}>{item}</div>
      </Card>
    </GridListTile>
  )

  renderDirectoryImage = (item, icon, isActive, onClick) => {
    return (
      <GridListTile cols={1} key={item}>
        <Card
          style={{display: 'inline-block', cursor: 'pointer', textAlign: 'left', backgroundColor: isActive ? 'yellow': 'white'}}
          onClick={onClick}>
          <img src={Api.img(item)} alt="" width="100%" />
        </Card>
      </GridListTile>
    )
  }

  render() {
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
          {[".."].concat(folders).map(folder => folder && this.renderDirectoryItem(
            folder,
            "folder",
            this.state.selectedFolder === (directory+'/'+folder).replace("//", "/"),
            () => folder != ".." && this.onChange({selectedFolder: (directory+'/'+folder).replace("//", "/"), selectedFile: ""})
          ))}
          {files.map(file => file && file.toLowerCase().endsWith(".jpg") && this.renderDirectoryImage(
              file,
              "image",
              this.state.selectedFile === directory+'/'+file,
              () => this.onChange({selectedFile: (directory+'/'+file).replace("//", "/"), selectedFolder: ""})
          ))}
        </GridList>
      </div>
    )
  }

}

export default DirectoryForm;
