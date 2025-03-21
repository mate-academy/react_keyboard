import React, { useState, useEffect } from 'react';

export const App: React.FC = () => {
  const [pressedKey, setPressedKey] = useState('');

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      setPressedKey(key);
    };

    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div className="App">
      <p className="App__message">
        {pressedKey
          ? `The last pressed key is [${pressedKey}]`
          : 'Nothing was pressed yet'}
      </p>
    </div>
  );
};
