import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [key, setKey] = useState('Nothing was pressed yet');

  useEffect(() => {
    const keyupHandler = (event: KeyboardEvent) => setKey(event.key);

    document.addEventListener('keyup', keyupHandler);

    return () => document.removeEventListener('keyup', keyupHandler);
  }, []);

  return (
    <div className="App">
      <p className="App__message">The last pressed key is {key}</p>
    </div>
  );
};
