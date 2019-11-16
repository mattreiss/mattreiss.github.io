import React from 'react';
import { ImageList } from '..';

export default { title: 'ImageList' };

export const basic = () => (
    <ImageList
        images={[
          {name: 'mammoth'},
          {name: 'hotcreek'},
          {name: 'halfdome'},
          {name: 'delicate'},
          {src:"https://github.com/mattreiss/mattreiss.github.io/blob/dev/src/assets/jpg/hotcreek/hd.jpg?raw=true"}
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
          {src:"https://github.com/mattreiss/mattreiss.github.io/blob/dev/src/assets/jpg/hotcreek/hd.jpg?raw=true"}
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
