import React from 'react';
// import styled from 'styled-components';
import { Image, List } from '../atoms';


const ImageList = (props) => {
  const {
    // width,
    // height,
    horizontal,
    quality,
    images
  } = props;
  return (
      <List
        horizontal={horizontal}
        data={images}
        renderItem={({item, index}) => (
          <Image
            quality={quality || item.quality || 'sd'}
            {...item}
          />
        )}
      />
  )
}

export default ImageList;
