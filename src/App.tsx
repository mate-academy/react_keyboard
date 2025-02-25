import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [key , setKey] = useState('')
  useEffect(() => {
    const handleAnyButton = (event: KeyboardEvent) => {
      setKey(event.key)
    };
    document.addEventListener('keyup', handleAnyButton);

    return () => {
      document.removeEventListener('keyup', handleAnyButton);
    };
  }, []);
  return (
    <p className="App__message">
      {key ? `The last pressed key is [${key}]` : 'Nothing was pressed yet'}
    </p>
  );
};
