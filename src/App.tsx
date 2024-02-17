import { useEffect, useState } from 'react';

export const App = () => {
  const [pressedKey, setPressedKey] = useState('Nothing was pressed yet');

  const handleKeyDown = (event: KeyboardEvent) => {
    setPressedKey(event.key);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="App">
      <p className="App__message">
        {pressedKey === 'Nothing was pressed yet'
          ? pressedKey
          : `The last pressed key is [${pressedKey}]`}
      </p>
    </div>
  );
};
