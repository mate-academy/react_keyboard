import React, { useState } from 'react';

export const App: React.FC = () => {
  const [saveKey, setSaveKey] = useState('');

  const pressedKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    setSaveKey(event.key);
  };

  return (
    <div className="App">
      <input type="text" onKeyDown={pressedKey} />
      <p className="App__message">
        {saveKey
          ? `The last pressed key is [${saveKey}]`
          : 'Nothing was pressed yet'}
      </p>
    </div>
  );
};
