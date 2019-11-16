import React from 'react';
import { Button } from '..';

export default { title: 'Button' };

export const withText = () => (
    <Button onClick={() => console.log("Button Clicked!")}>
        Hello Button
    </Button>
);

export const withEmoji = () => (
  <Button onClick={() => console.log("Button Clicked!")} bg="success">
      <span role="img" aria-label="so cool">😀 😎 👍 💯</span>
  </Button>
);
