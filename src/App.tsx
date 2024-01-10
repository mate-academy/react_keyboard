/* eslint-disable */
import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [keyPressed, setKeyPressed] = useState(false);
  const [lastKeyPressed, setLastKeyPressed] = useState('');

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      setKeyPressed(true);
      setLastKeyPressed(event.key);
    };

    document.addEventListener('keyup', handleKey);

    return () => {
      document.removeEventListener('keyup', handleKey);
    };
  }, []);

  return (
    <div className="App">
      {keyPressed ? (
        <p className="App__message">
          The last pressed key is
          [{lastKeyPressed}]
        </p>
      ) : (
        <p className="App__message">Nothing was pressed yet</p>
      )}
    </div>
  );
};
