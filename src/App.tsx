import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [lastKey, setLastKey] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyUp = (event: KeyboardEvent) => {
      setLastKey(event.key);
    };

    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div className="App">
      <p className="App__message">
        {lastKey
          ? `The last pressed key is [${lastKey}]`
          : 'Nothing was pressed yet'}
      </p>
    </div>
  );
};
