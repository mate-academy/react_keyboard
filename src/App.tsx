import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [keyPressed, setKeyPressed] = useState<string | null>(null);

  const handleClickKeyboard = (event: KeyboardEvent) => {
    setKeyPressed(event.key);
  };

  useEffect(() => {
    document.addEventListener('keyup', handleClickKeyboard);

    return () => {
      document.removeEventListener('keyup', handleClickKeyboard);
    };
  }, [keyPressed]);

  return (
    <div className="App">
      <p className="App__message">
        {keyPressed
          ? `The last pressed key is [${keyPressed}]`
          : 'Nothing was pressed yet'}
      </p>
    </div>
  );
};
