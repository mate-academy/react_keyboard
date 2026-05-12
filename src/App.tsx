import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [pressedKey, setPressedKey] = useState<string>('');

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setPressedKey(event.key);
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return pressedKey ? (
    <div className="App">
      <p className="App__message">The last pressed key is [{pressedKey}]</p>
    </div>
  ) : (
    <div className="App">
      <p className="App__message">Nothing was pressed yet</p>
    </div>
  );
};
