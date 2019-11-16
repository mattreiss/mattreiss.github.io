import React from 'react';
import { Button } from '..';

export default { title: 'Button' };

export const withText = () => (
    <Button
        onClick={() => console.log("Button Clicked!")}
        bg="primary">
        Hello Button
    </Button>
);

export const withEmoji = () => (
  <Button onClick={() => console.log("Button Clicked!")} >
      <span role="img" aria-label="so cool">😀 😎 👍 💯</span>
  </Button>
);


export const withoutAccesibility = () => (
    <Button
        onClick={() => console.log("Button Clicked!")}
        color="primary"
        bg="primary">
        Hello Button
    </Button>
);
