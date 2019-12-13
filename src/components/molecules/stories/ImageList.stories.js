import React from 'react';
import { ImageList } from '..';

export default { title: 'ImageList' };

const externalUrl = "https://github.com/mattreiss/mattreiss.github.io/blob/dev/src/assets/jpg/hotcreek/hd.jpg?raw=true";

export const basic = () => (
    <ImageList
        images={[
          {name: 'mammoth'},
          {name: 'hotcreek'},
          {name: 'halfdome'},
          {name: 'delicate'},
          {src: externalUrl}
        ]}
    />
);


export const withImageProps= () => (
    <ImageList
        horizontal={true}
        images={[
          {name: 'mammoth', isSquare: true, scale: 4},
          {name: 'hotcreek', isSquare: true, scale: 4},
          {name: 'halfdome', isSquare: true, scale: 4},
          {name: 'delicate', isSquare: true, scale: 4},
          {src: externalUrl, isSquare: true, scale: 4}
        ]}
    />
);

export const horizontal = () => (
    <ImageList
        horizontal={true}
        images={[
          {name: 'mammoth'},
          {name: 'hotcreek'},
          {name: 'halfdome'},
          {name: 'delicate'},
          {src: externalUrl}
        ]}
    />
);


export const horizontalWithHeight = () => (
    <ImageList
        height={300}
        horizontal={true}
        images={[
          {name: 'mammoth'},
          {name: 'hotcreek'},
          {name: 'halfdome'},
          {name: 'delicate'}
        ]}
    />
);
