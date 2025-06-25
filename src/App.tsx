import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [key, setKey] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyUp = (event: KeyboardEvent) => {
      setKey(event.key);
    };

    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div className="App">
      {key === null && <p>Nothing was pressed yet</p>}
      {key !== null && (
        <p className="App__message">The last pressed key is {key}</p>
      )}
    </div>
  );
};
