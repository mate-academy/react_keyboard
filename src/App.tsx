import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [isPressedKey, setIsPressedKey] = useState('');

  useEffect(() => {
    function handleKeyPress(event: KeyboardEvent) {
      setIsPressedKey(event.key);
    }

    document.addEventListener('keyup', handleKeyPress);

    return () => {
      document.removeEventListener('keyup', handleKeyPress);
    };
  }, []);

  return (
    <div className="App">
      <p className="App__message">{isPressedKey ? `The last pressed key is [${isPressedKey}]` : 'Nothing was pressed yet'}</p>
    </div>
  );
};
