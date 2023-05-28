import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [pressedKey, setPressedKey] = useState('');
  const keyupHandler = (event: KeyboardEvent) => {
    setPressedKey(event.key);
  };

  useEffect(() => {
    document.addEventListener('keyup', keyupHandler);

    return () => {
      document.removeEventListener('keyup', keyupHandler);
    };
  }, []);

  return (
    <div className="App">
      <p className="App__message">
        {`${(pressedKey !== '')
          ? `The last pressed key is [${pressedKey}]`
          : 'Nothing was pressed yet'}`}
      </p>
    </div>
  );
};
