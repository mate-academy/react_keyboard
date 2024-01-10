import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [key, setKey] = useState('');

  useEffect(() => {
    const handlePressedKey = (event: KeyboardEvent) => {
      setKey(event.key);
    };

    document.addEventListener('keyup', handlePressedKey);

    return () => {
      document.removeEventListener('keyup', handlePressedKey);
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
