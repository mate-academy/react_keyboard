import React from 'react';
import { useState, useEffect } from 'react';

export const App: React.FC = () => {
  const [pressedKey, setPressedKey] = useState<string>('');

  const keyboardHandler = (event: KeyboardEvent) => {
    setPressedKey(event.key);
  };

  useEffect(() => {
    document.addEventListener('keyup', keyboardHandler);

    return () => {
      document.removeEventListener('keyup', keyboardHandler);
    };
  }, []);



  return (
    <div className="App">{
      pressedKey
        ? <p className="App__message">{`The last pressed key is [${pressedKey}]`}</p>
        : <p className="App__message">Nothing was pressed yet</p>
    }
  </div>
)};
