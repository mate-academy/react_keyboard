import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [lastPressedKey, setLastPressedKey] = useState<string>('');

  useEffect(() => {
    const handleKeyUp = (event: KeyboardEvent) => {
      setLastPressedKey(event.key);
    };

    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div className="App">
      <p className="App__message">{lastPressedKey ? `The last pressed key is [${lastPressedKey}]` : 'Nothing was pressed yet'}</p>
    </div>
  );
};
