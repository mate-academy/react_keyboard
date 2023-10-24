import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [key, setKey] = useState('');

  const handleKeySet = (event: KeyboardEvent) => {
    event.stopPropagation();
    setKey(event.key);
  };

  useEffect(() => {
    document.addEventListener('keyup', handleKeySet);

    return () => {
      document.removeEventListener('keyup', handleKeySet);
    };
  }, []);

  return (
    <div className="App">
      <p className="App__message">
        {key
          ? `The last pressed key is [${key}]`
          : 'Nothing was pressed yet'}
      </p>
    </div>
  );
};
