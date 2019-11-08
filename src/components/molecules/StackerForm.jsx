import React from 'react';
import styled from 'styled-components';
import {
  Icon,
  Button,
  Form,
  Input,
  Label,
  Image,
  Section,
  Select,
  IconButton
} from '../atoms';

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
  }
`;

const Divide = styled.div`
  width: 50%;
  display:inline-block;
`;

export default class StackerForm extends React.Component {
  state = {
    data: {
      blendMode: BlendMode.LIGHTEN,
      effect: "commet",
      stackLength: 12,
      stackGrowth: 1,
      autoAlign: false,
      action: null,
      displacement: 1,
      video: "1080@24",
      delayLength: 0,
      growEvery: 1,
      stackOnce: false,
      selectedFolder: '~/Desktop',
    }
  }

  onSubmit = () => {
    const { onSubmit } = this.props;
  }

  onChange = (e) => {
    const { data } = this.state;
    const { name, value} = e.target;
    console.log("onChange", name, value);
    data[name] = value;
    this.setState({data});
  }

  onClickFolder = () => {
    console.log("select folder");
  }

  render() {
    const { data } = this.state;
    return (
      <Form>
        <Group>
          <Label>Selected Folder</Label>
          <Input
            mx="medium"
            type='text'
            name="selectedFolder"
            value={data.selectedFolder}
            onChange={this.onChange}/>
          <IconButton
            onClick={this.onClickFolder}
            name="folder"
            color="negative"
            size="medium"/>
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
              {value: null, name: 'None'},
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
            Stack Growth
          </Label>
          <Input
            mx="medium"
            type='number'
            name="stackGrowth"
            value={data.stackGrowth}
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
