import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [pressedKey, setPressedKey] = useState('');

  useEffect(() => {
    const handleKeyClick = (event: KeyboardEvent) => {
      setPressedKey(event.key);
    };

    document.addEventListener('keyup', handleKeyClick);

    return () => {
      document.removeEventListener('keyup', handleKeyClick);
    };
  }, []);

  return (
    <div className="App">
      {!pressedKey ? (
        <p className="App__message">Nothing was pressed yet</p>
      ) : (
        <p className="App__message">The last pressed key is [{pressedKey}]</p>
      )}
    </div>
  );
};
