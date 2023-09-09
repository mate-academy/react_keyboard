import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [key, setKey] = useState('');

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      setKey(event.key);
    };

    document.addEventListener('keyup', handleKeyPress);

    return () => {
      document.removeEventListener('keyup', handleKeyPress);
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
