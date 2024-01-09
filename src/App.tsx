import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [key, setKey] = useState('');

  useEffect(() => {
    const handlePressedKey = (event: KeyboardEvent) => {
      setKey(event.key);
    };

    document.addEventListener('keyup', handlePressedKey);

    return () => {};
  }, []);

  return (
    <div className="App">
      <p className="App__message">
        The last pressed key is [
        {key}
        ]
      </p>
    </div>
  );
};
