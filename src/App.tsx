import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [pressedKey, setPressedKey] = useState('');
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setPressedKey(event.key);
      setPressed(true);
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="App">
      <p className="App__message">
        {pressed
          ? `The last pressed key is [${pressedKey}]`
          : 'Nothing was pressed yet'}
      </p>
    </div>
  );
};
