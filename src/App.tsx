import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [pressedKey, setPressedKey] = useState('');

  useEffect(() => {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      setPressedKey(event.key);
    });
  }, [pressedKey]);

  return (
    <div className="App">
      {pressedKey ? (
        <p className="App__message">The last pressed key is [{pressedKey}]</p>
      ) : (
        <p className="App__message">Nothing was pressed yet</p>
      )}
    </div>
  );
};
