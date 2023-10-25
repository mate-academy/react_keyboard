import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [key, setKey] = useState('');

  const handleKeyPress = (event: KeyboardEvent) => {
    setKey(event.key);
  };

  useEffect(() => {
    document.addEventListener('keyup', handleKeyPress);

    return () => {
      document.removeEventListener('keyup', handleKeyPress);
    };
  }, []);

  return (
    <div className="App">
      <p className="App__message">
        {key.length > 0
          ? `The last pressed key is [${key}]`
          : 'Nothing was pressed yet'}
      </p>
    </div>
  );
};
