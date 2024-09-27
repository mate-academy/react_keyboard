import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [lastKey, setLastKey] = useState<string | null>(null);

  useEffect(() => {
    const detectedKeyDown = (e: KeyboardEvent) => {
      setLastKey(e.key);
    };

    document.addEventListener('keydown', detectedKeyDown);

    return () => {
      document.removeEventListener('keydown', detectedKeyDown);
    };
  });

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
