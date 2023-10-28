import React, { useState, useEffect } from 'react';

export const App1: React.FC = () => {
  const [currentKey, setCurrentKey] = useState('');

  useEffect(() => {
    const handleKeyboardClick = (event: KeyboardEvent) => {
      setCurrentKey(event.key);
    };

    document.addEventListener('keyup', handleKeyboardClick);

    return () => {
      document.removeEventListener('keyup', handleKeyboardClick);
    };
  }, []);

  return (
    <div className="App">
      {!currentKey
      && <p className="App__message">Nothing was pressed yet</p>}
      {currentKey
      && <p className="App__message">{`The last pressed key is ${currentKey}`}</p>}
    </div>
  );
};
