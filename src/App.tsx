import React, { useState, useEffect } from 'react';

export const App: React.FC = () => {
  const [pressedKey, setPressedKey] = useState('');

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setPressedKey(event.key);
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="App">
      <p className="App__message">
        {pressedKey === ''
          ? 'Nothing was pressed yet'
          : `The last pressed key is [${pressedKey}]`}
      </p>
    </div>
  );
};
