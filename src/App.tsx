import React, { useEffect } from 'react';

export const App: React.FC = () => {
  const [lastKey, setLastKey] = React.useState<string | null>(null);

  useEffect(() => {
    const handleKeyboardKey = (event: KeyboardEvent) => {
      setLastKey(event.key);
    };

    window.addEventListener('keydown', handleKeyboardKey);

    return () => {
      window.removeEventListener('keydown', handleKeyboardKey);
    };
  }, []);

  return (
    <div className="App">
      <p className="App__message">
        {lastKey
          ? `The last pressed key is [${lastKey}]`
          : 'Nothing was pressed yet'}
      </p>
    </div>
  );
};
