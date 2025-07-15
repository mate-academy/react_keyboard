import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [keyPressed, setKeyPressed] = useState('');

  useEffect(() => {
    const handleClick = (event: KeyboardEvent) => {
      setKeyPressed(event.key);
    };

    window.addEventListener('keydown', handleClick);

    return () => {
      window.removeEventListener('keydown', handleClick);
    };
  }, []);

  return (
    <div className="App">
      {!keyPressed ? (
        <p className="App__message">Nothing was pressed yet</p>
      ) : (
        <p className="App__message">The last pressed key is [{keyPressed}]</p>
      )}
    </div>
  );
};
