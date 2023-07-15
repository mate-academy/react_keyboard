import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [lastKeyPressed, setLastKeyPressed] = useState<string | null>(null);

  function handleKeyPress(event: KeyboardEvent) {
    setLastKeyPressed(event.key);
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className="App">
      <p className="App__message">
        {lastKeyPressed ? `The last pressed key is [${lastKeyPressed}]` : 'Nothing was pressed yet'}
      </p>
    </div>
  );
};

export default App;
