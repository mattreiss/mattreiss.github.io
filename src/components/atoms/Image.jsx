import React from 'react';
import styled from 'styled-components';

const Figure = styled.figure`
  ${({width, height}) => width && height && ({
    width,
    height
  })}
  overflow: ${p => p.overflow};
  margin: 0px;
`;

const Img = styled.img`

`;

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      marginLeft: 0,
      marginTop: 0,
      width: 0,
      height: 0,
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  componentDidUpdate(prevProps) {
    if (this.props.name !== prevProps.name) {
      this.setState({width:0, height: 0},this.updateDimensions);
    }
  }

  updateDimensions = () => {
    if (!this.aspectRatio) return;
    let {
      width,
      height,
      marginLeft,
      marginTop
    } = this.state;
    let { scale, isSquare } = this.props;
    if (!scale) scale = 1;
    let w = window.innerWidth / scale;
    let h = window.innerHeight / scale;
    if (isSquare) h = w;
    width = w;
    height = w * this.aspectRatio;
    if (height < h) {
      width = h / this.aspectRatio;
      height = h;
      marginLeft = -0.5 * Math.abs(width - w);
      marginTop = 0;
    } else {
      marginLeft = 0;
      marginTop = -0.5 * Math.abs(height - h);
    }

    this.setState({ width, height, marginLeft, marginTop });
  }

  onLoadImage = () => {
    this.aspectRatio = this.img.height / this.img.width;
    this.updateDimensions();
  }

  render() {
    let {
      className,
      quality,
      name,
      isSquare,
      scale,
      src
    } = this.props;
    let {
      width,
      height,
      marginLeft,
      marginTop
    } = this.state;
    if (!src) {
      try {
        src = require(`../../assets/jpg/${name}/${quality}.jpg`);
      } catch (e) {
        console.log("File Not Found!", `../../assets/jpg/${name}/${quality}.jpg`);
        return <div />
      }
    }

    let squareWidth = this.aspectRatio < 1 ? height : width;
    let squareHeight = squareWidth;

    let scaledWidth = isSquare ? squareWidth : width;
    let scaledHeight = isSquare ? squareHeight  : null;
    let scaledStyle = isSquare ? {marginLeft, marginTop} : {};

    if (scale && (!width || !height)) {
      return (
        <Img
          ref={ref => this.img = ref}
          src={src}
          onLoad={this.onLoadImage}
          style={{opacity: 0}}
        />
      )
    }

    if (!scale) {
      scaledStyle = {};
      scaledWidth = null;
      scaledHeight = null;
      width = this.props.width;
      height = this.props.height;
    }

    return (
      <Figure
        className={className}
        width={scaledWidth}
        height={scaledHeight}
        style={scale ? {marginTop: isSquare ? -4 : 0} : {}}>
        <Img
          ref={ref => this.img = ref}
          src={src}
          width={width}
          height={height}
          style={scaledStyle}
        />
      </Figure>
    )
  }
}

export default Image;
