import React from 'react';

type KeyType = {
  keyUp: string;
};

export const KeyboardMessage: React.FC<KeyType> = ({ keyUp }) => (
  <p className="App__message">{`The last pressed key is [${keyUp}]`}</p>
);
