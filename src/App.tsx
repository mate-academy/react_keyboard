import React, { useEffect, useRef, useState } from 'react';

export const App: React.FC = () => {
  const [pressedKey, setPressedKey] = useState('');

  const lastKey = useRef('');

  useEffect(() => {
    const handleKeyUp = (event: KeyboardEvent) => {
      setPressedKey(lastKey.current !== event.key ? event.key : pressedKey);

      lastKey.current = event.key;
    };

    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [pressedKey]);

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
