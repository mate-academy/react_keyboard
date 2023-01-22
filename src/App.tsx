import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [lastKeyUp, setLastKeyUp] = useState('');

  useEffect(() => {
    const handleKeyUp = (event: KeyboardEvent) => {
      setLastKeyUp(event.key);
    };

    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div className="App">
      <p className="App__message">
        {lastKeyUp
          ? `The last pressed key is ${lastKeyUp}`
          : 'Nothing was pressed yet'}
      </p>
    </div>
  );
};
