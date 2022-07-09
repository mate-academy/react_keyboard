import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [pressedKey, setPressedKey] = useState('');
  const changePressedKey = (event: KeyboardEvent) => {
    setPressedKey(event.key);
  };

  useEffect(() => {
    document.addEventListener('keyup', changePressedKey);

    return () => {
      document.removeEventListener('keyup', changePressedKey);
    };
  }, [pressedKey]);

  return (
    <div className="app">
      <h1>Press any key to see the magic</h1>
      <h2>
        {pressedKey
          ? `The last pressed key is ${pressedKey}`
          : 'Nothing was pressed yet'}
      </h2>
    </div>
  );
};
