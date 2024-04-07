import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [pressedKey, setPressedKey] = useState<null | string>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setPressedKey(event.key);
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div onKeyUp={event => setPressedKey(event.key)} className="App">
      {!pressedKey ? (
        <p className="App__message">Nothing was pressed yet</p>
      ) : (
        <p className="App__message">The last pressed key is [{pressedKey}]</p>
      )}
    </div>
  );
};
