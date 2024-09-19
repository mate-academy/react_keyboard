import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [keyName, setKeyName] = useState('');

  useEffect(() => {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      setKeyName(event.key);
    });

    return () => {
      document.removeEventListener('keyup', (event: KeyboardEvent) => {
        setKeyName(event.key);
      });
    };
  }, []);

  return (
    <div className="App">
      {keyName ? (
        <p className="App__message">The last pressed key is [{keyName}]</p>
      ) : (
        <p className="App__message">Nothing was pressed yet</p>
      )}
    </div>
  );
};
