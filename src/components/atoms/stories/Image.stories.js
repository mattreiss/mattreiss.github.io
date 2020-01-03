import React from 'react';
import { Image2, Image } from '..';

export default { title: 'Image' };

export const fullResolution = () => (
    <div>
        <Image
          name="mammoth"
          quality="hd"
        />
        <Image
          name="mammoth"
          quality="sd"
        />
    </div>
);


export const customSize = () => (
    <Image2
      name="mammoth"
      quality="hd"
      scale={2}
      width={800}
      height={1200}
    />
);

export const customSrc = () => (
    <Image
        src="https://github.com/mattreiss/mattreiss.github.io/blob/dev/src/assets/jpg/hotcreek/hd.jpg?raw=true"
        quality="hd"
        width={800}
        height={1200}
    />
);

export const scaled = () => (
    <div>
        <Image
          name="mammoth"
          quality="hd"
          scale={1}
        />
        <Image
          name="mammoth"
          quality="hd"
          scale={2}
        />
        <Image
          name="mammoth"
          quality="hd"
          scale={3}
        />
        <Image
          name="mammoth"
          quality="hd"
          scale={4}
        />
        <Image
          name="mammoth"
          quality="hd"
          scale={5}
        />
    </div>
);
