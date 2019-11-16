import React from 'react';
import styled from 'styled-components';
import { Image, List } from '../atoms';


const ImageList = (props) => {
  return (
      <List
        data={props.images}
        renderItem={({item, index}) => (
          <Image
            name={item.img}
            scale={1}
        )}
      />
  )
}

export default ResponsiveImage;
