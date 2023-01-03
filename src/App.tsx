import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [lastKey, setLastKey] = useState('');

  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      setLastKey(event.key);
    };

    document.addEventListener('keyup', listener);

    return () => {
      document.removeEventListener('keyup', listener);
    };
  }, []);

  return (
    <div
      className="App"
    >
      {lastKey
        ? <p className="App__message">{`The last pressed key is [${lastKey}]`}</p>
        : <p className="App__message">Nothing was pressed yet</p>}
    </div>
  );
};
