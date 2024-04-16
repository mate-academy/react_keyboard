import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [pressedButton, setPressedButton] = useState('');

  useEffect(() => {
    const handleKeyUp = (event: KeyboardEvent) => {
      setPressedButton(event.key);
    };

    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div className="App">
      {!pressedButton ? (
        <p className="App__message">Nothing was pressed yet</p>
      ) : (
        <p className="App__message">
          The last pressed key is [{pressedButton}]
        </p>
      )}
    </div>
  );
};
