import React from 'react';
import styled from 'styled-components';

const Figure = styled.figure`
  width: calc(100% / ${p => p.scale});
  margin: 0px;
  margin-block-start: 0px;
  margin-block-end: 0px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;

`;

const Img = styled.img`
  width: 100%;
`;

class Image extends React.Component {
  state = {
    aspectRatio: null
  }

  onLoadImage = () => {
    let aspectRatio = this.img.height / this.img.width;
    this.setState({ aspectRatio });
    console.log("onLoadImage")
  }

  render() {
    let {
      className,
      quality,
      name,
      src,
      scale
    } = this.props;
    let { aspectRatio } = this.state;
    if (!src) {
      try {
        src = require(`../../assets/jpg/${name}/${quality}.jpg`);
      } catch (e) {
        console.log("File Not Found!", `../../assets/jpg/${name}/${quality}.jpg`);
        return <div />
      }
    }

    if (!aspectRatio) {
      return (
        <Img
          ref={ref => this.img = ref}
          src={src}
          onLoad={this.onLoadImage}
          style={{opacity: 0}}
        />
      )
    }
    return (
      <Figure
        className={className}
        scale={scale}>
        <Img
          ref={ref => this.img = ref}
          src={src}
        />
      </Figure>
    )
  }
}

export default Image;
