import React, { useEffect, useState, useCallback } from 'react';

export const App: React.FC = () => {
  const [pressedKey, setPressedKey] = useState('');

  const handleKeyUp = useCallback((event: KeyboardEvent) => {
    setPressedKey(event.key);
  }, []);

  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [handleKeyUp]);

  return (
    <div className="App">
      {pressedKey === '' ? (
        <p className="App__message">Nothing was pressed yet</p>
      ) : (
        <p className="App__message">The last pressed key is [{pressedKey}]</p>
      )}
    </div>
  );
};
