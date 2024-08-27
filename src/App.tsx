import React, { useEffect } from 'react';
import { useState } from 'react';
import { Keyboard } from './components/keyboard';

export const App: React.FC = () => {
  const [keyUp, setKeyUp] = useState('');
  const [pressedKey, setPressedKey] = useState(false);

  const onKey = (event: KeyboardEvent) => {
    setKeyUp(event.key);
    setPressedKey(true);
  };

  useEffect(() => {
    document.addEventListener('keyup', onKey);

    return () => {
      document.removeEventListener('keyup', onKey);
    };
  }, []);

  const defoultMessege = 'Nothing was pressed yet';

  return (
    <div className="App">
      {!pressedKey ? (
        <p className="App__message">{defoultMessege}</p>
      ) : (
        <Keyboard keyUp={keyUp} />
      )}
    </div>
  );
};
