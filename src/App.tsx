import React, { useState } from 'react';

export const App: React.FC = () => {
  const [pressedKey, setPressedKey] = useState('');

  document.addEventListener('keyup', (event: KeyboardEvent) => {
    setPressedKey(event.key);
  });

  return (
    <div className="App">
      <p className="App__message">
        {!pressedKey ? (
          'Nothing was pressed yet'
        ) : (
          `The last pressed key is [${pressedKey}]`
        )}
      </p>
    </div>
  );
};
