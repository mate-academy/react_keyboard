import React, { useEffect } from 'react';
import { useState } from 'react';

export const App: React.FC = () => {
  const [pressedKey, setPressedKey] = useState('');

  useEffect(() => {
    const handlePressedKey = (e: KeyboardEvent) => {
      setPressedKey(e.key);
    };

    window.addEventListener('keydown', handlePressedKey);

    return () => window.removeEventListener('keydown', handlePressedKey);
  }, []);

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
