import React from 'react';
import styled from 'styled-components';
import Api from '../../data/Api';
import {
  Icon,
  Button,
  Form,
  Input,
  Label,
  // Image,
  Section,
  Select,
  List
} from '../atoms';
import {
  ImageList
} from '../molecules';

const BlendMode = {
  LIGHTEN: 8,
  DARKEN: 4,
  NORMAL: 2
}

const Group = styled(Section)`
  display: flex;
  justify-content: center;
  padding: 8px;
  & > * {
    display: inline-block;
  }
`;

const ListContainer = styled.div`
  max-height: 300px;
`;

export default class StackerForm extends React.Component {
  state = {
    folders: [],
    files: [],
    data: {
      blendMode: BlendMode.LIGHTEN,
      effect: "commet",
      stackLength: 12,
      stackGrowth: 1,
      autoAlign: false,
      action: 'null',
      displacement: 1,
      video: "1080@24",
      delayLength: 0,
      growEvery: 1,
      stackOnce: false,
      selectedFolder: '~/Desktop',
    }
  }

  componentDidMount() {
    this._mounted = true;
    this.listDirectory(this.state.data.selectedFolder);
  }

  listDirectory(directory) {
    if (!directory || directory === "" || directory.indexOf("/") === -1) {
      if (directory !== "~") {
        directory = "/"
      }
    }
    Api.list(directory).then(res => {
      const array = res.data.trim().split(";");
      const folderString = array[0].replace("folders=", "").trim();
      const fileString = array[1].replace("files=", "").trim();
      const folders = folderString.split(",");
      const files = fileString.split(",").filter(f => f.toLowerCase().endsWith(".jpg"));
      this._mounted && this.setState({folders, files})
    })
  }

  onChangeSelectedFolder(directory) {
    this.lastChange = Date.now();
    const timeout = 500;
    setTimeout(() => {
      const timeDif = Date.now() - this.lastChange;
      if (timeDif >= timeout) this.listDirectory(directory);
    }, timeout)
  }

  onChange = (e) => {
    const { data } = this.state;
    const { name, value} = e.target;
    console.log("onChange", name, value);
    data[name] = value;
    this.setState({data, folders: [], files: []});
    if (name === 'selectedFolder') {
      this.onChangeSelectedFolder(value);
    }
  }

  onClickFolder = (name) => {
    const { data } = this.state;
    const { selectedFolder } = data;
    let nextFolder = (selectedFolder + "/" + name).replace("//", "/");
    if (name === "..") {
      let lastSlash = selectedFolder.lastIndexOf("/");
      let firstSlash = selectedFolder.indexOf("/");
      if (lastSlash !== firstSlash) {
        nextFolder = selectedFolder.substring(0, lastSlash);
      } else {
        return;
      }
    }
    data.selectedFolder = nextFolder;
    this.setState({data, folders: [], files: []});
    this.onChangeSelectedFolder(nextFolder);
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { data } = this.state;
    if (data.action === 'null') data.action = null;
    let formString =  JSON.stringify(data);
    for (let key in data) {
      formString = formString.replace('"' + key + '"', key)
    }
    Api.runStacker("Stacker", [
      data.selectedFolder,
      formString
    ])
  }

  render() {
    const { data, folders, files } = this.state;
    folders.unshift("..");
    return (
      <Form>
        <ListContainer>
            <List horizontal={true}
              data={folders}
              renderItem={({item, index}) => item && item.length > 0 && (
                <Button
                  height="80px"
                  width="80px"
                  bg="transparent"
                  color="primary"
                  onClick={(e) => {
                    e.preventDefault();
                    this.onClickFolder(item);
                  }} >
                  <div>
                    <Icon
                      name="Folder"
                      color="primary"
                      size="medium"/>
                  </div>
                  <div>
                    {item}
                  </div>
                </Button>
              )}
            />
            <ImageList
              horizontal={true}
              images={files.map(file => ({src: Api.img(file), isSquare: false, scale: 10}))}
            />
        </ListContainer>
        <Group>
          <Label>Selected Folder</Label>
          <Input
            mx="medium"
            type='text'
            name="selectedFolder"
            value={data.selectedFolder}
            onChange={this.onChange}/>
        </Group>
        <Group>
          <Label>Blend Mode</Label>
          <Select options={[
              {value: BlendMode.LIGHTEN, name: 'Lighten'},
              {value: BlendMode.DARKEN, name: 'Darken'},
              {value: BlendMode.NORMAL, name: 'Normal'},
            ]}
            name="blendMode"
            value={data.blendMode}
            onChange={this.onChange}
          />
        </Group>

        <Group>
          <Label>Effect</Label>
          <Select options={[
              {value: 'commet', name: 'Commet'},
              {value: 'reverseCommet', name: 'Reverse Commet'},
              {value: 'tile', name: 'Tile'},
              {value: 'tileBend', name: 'Tile Bend'},
              {value: 'reverseTile', name: 'Reverse Tile'},
              {value: 'normal', name: 'Normal'},
            ]}
            name="effect"
            value={data.effect}
            onChange={this.onChange}
          />
        </Group>

        <Group>
          <Label>
            Stack Growth
          </Label>
          <Select options={[
              {value: 1, name: 'Growth'},
              {value: 2, name: 'Decay'},
              {value: 3, name: 'Growth & Decay'},
              {value: 0, name: 'None'},
            ]}
            name="stackGrowth"
            value={data.stackGrowth}
            onChange={this.onChange}
          />
        </Group>

        <Group>
          <Label>
            Video
          </Label>
          <Select options={[
              {name: '720p @24fps', value: '720@24'},
              {name: '720p @30fps', value: '720@30'},
              {name: '720p @60fps', value: '720@60'},
              {name: '1080p @24fps', value: '1080@24'},
              {name: '1080p @30fps', value: '1080@30'},
              {name: '1080p @60fps', value: '1080@60'},
              {name: '2304p @24fps', value: '2304@24'},
              {name: "None", value: null}
            ]}
            name="video"
            value={data.video}
            onChange={this.onChange}
          />
        </Group>

        <Group>
          <Label>
            Action
          </Label>
          <Select options={[
              {value: 'null', name: 'None'},
              {value: 'Action', name: 'Action'},
            ]}
            name="action"
            value={data.action}
            onChange={this.onChange}
          />
        </Group>

        <Group>
          <Label>
            Auto-Align
          </Label>
          <Select options={[
              {value: true, name: 'On'},
              {value: false, name: 'Off'},
            ]}
            name="autoAlign"
            value={data.autoAlign}
            onChange={this.onChange}
          />
        </Group>

        <Group>
          <Label>
            Stack Once
          </Label>
          <Select options={[
              {value: true, name: 'On'},
              {value: false, name: 'Off'},
            ]}
            name="stackOnce"
            value={data.stackOnce}
            onChange={this.onChange}
          />
        </Group>

        <Group>
          <Label>
            Stack Length
          </Label>
          <Input
            mx="medium"
            type='number'
            name="stackLength"
            value={data.stackLength}
            onChange={this.onChange}/>
        </Group>

        <Group>
          <Label>
            Displacement
          </Label>
          <Input
            mx="medium"
            type='number'
            name="displacement"
            value={data.displacement}
            onChange={this.onChange}/>
        </Group>

        <Group>
          <Label>
            Delay Length
          </Label>
          <Input
            mx="medium"
            type='number'
            name="delayLength"
            value={data.delayLength}
            onChange={this.onChange}/>
        </Group>

        <Group>
          <Label>
            Grow Every
          </Label>
          <Input
            mx="medium"
            type='number'
            name="growEvery"
            value={data.growEvery}
            onChange={this.onChange}/>
        </Group>

        <Group>
          <Button
            width="xxxl"
            height="xs"
            bg="primary"
            color="white"
            fontSize="medium"
            onClick={this.onSubmit}>
            Start
          </Button>
        </Group>
      </Form>
    )
  }
}
