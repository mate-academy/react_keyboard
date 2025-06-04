import React, { useEffect, useState } from 'react';

type ButtonPressed = string | null;

export const App: React.FC = () => {
  const [lastButtonPressed, setLastButtonPressed] =
    useState<ButtonPressed>(null);

  const handleLastButtonPressed = (event: KeyboardEvent) => {
    return setLastButtonPressed(event.key);
  };

  useEffect(() => {
    document.addEventListener('keyup', handleLastButtonPressed);

    return () => document.removeEventListener('keyup', handleLastButtonPressed);
  }, []);

  return (
    <div className="App">
      {lastButtonPressed ? (
        <p className="App__message">
          The last pressed key is [{lastButtonPressed}]
        </p>
      ) : (
        <p className="App__message">Nothing was pressed yet</p>
      )}
    </div>
  );
};
