import React, { useEffect, useState } from 'react';

export const App2: React.FC = () => {
  const [pressedKey, setPressedKey] = useState('');

  const handleKeyUp = (event: KeyboardEvent) => {
    setPressedKey(event.key);
  };

  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div className="App2">
      <p className="App__message">
        {
          pressedKey
            ? `The last pressed key is [${pressedKey}]`
            : 'Nothing was pressed yet'
        }
      </p>
    </div>
  );
};
