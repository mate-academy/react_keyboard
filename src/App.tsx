import React, { useEffect, useState } from 'react';
type AppState = {
  pressKey: string;
};

export const App: React.FC = () => {
  const [pressKey, setPressKey] = useState<AppState>({ pressKey: '' });

  useEffect(() => {
    const handleKeyUp = (event: KeyboardEvent) => {
      setPressKey({ pressKey: event.key });
    };

    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div className="App">
      <p className="App__message">
        {pressKey.pressKey
          ? `The last pressed key is [${pressKey.pressKey}]`
          : 'Nothing was pressed yet'}
      </p>
    </div>
  );
};
