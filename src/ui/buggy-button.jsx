import Button from './button';
import React, { useState } from 'react';

export default function BuggyButton() {
  const [clicked, setClicked] = useState(false);

  if (clicked) {
    throw new Error('Oh no! Something went wrong.');
  }

  return (
    <Button
      kind="error"
      onClick={() => {
        setClicked(true);
      }}
    >
      Trigger Error
    </Button>
  );
}
