import React, { useEffect } from 'react';

export const App: React.FC = () => {
  const [pressedKey, setPressedKey] = React.useState<string>('');

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setPressedKey(event.key);
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="App">
      <p className="App__message">
        {pressedKey ? `Pressed key: ${pressedKey}` : 'Nothing was pressed yet'}
      </p>
    </div>
  );
};
