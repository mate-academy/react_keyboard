import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [pressedKey, setPressedKey] = useState('');

  useEffect(() => {
    const handlerKeyPress = (event: KeyboardEvent) => {
      setPressedKey(event.key);
    };

    document.addEventListener('keyup', handlerKeyPress);

    return () => {
      document.removeEventListener('keyup', handlerKeyPress);
    };
  }, []);

  return (
    <div className="App">
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
