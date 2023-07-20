import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [pressedKey, setPressedKey] = useState<string>('');

  useEffect(() => {
    const handleKeyUp = (event: KeyboardEvent): void => {
      setPressedKey(event.key);
    };

    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div className="App">
      {
        pressedKey
          ? (
            <p className="App__message">
              The last pressed key is [
              {pressedKey}
              ]
            </p>
          )
          : <p className="App__message">Nothing was pressed yet</p>
      }
    </div>
  );
};
