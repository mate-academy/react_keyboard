import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [pressedKey, setPressedKey] = useState('Nothing was pressed yet');

  useEffect(() => {
    const keyPressed = document.addEventListener(
      'keyup',
      (event: KeyboardEvent) => {
        setPressedKey(`The last pressed key is [${event.key}]`);
      },
    );

    return () => {
      document.removeEventListener('keyup', keyPressed);
    };
  }, [pressedKey]);

  return (
    <>
      <div className="App">
        <p className="App__message">{pressedKey}</p>
      </div>
    </>
  );
};
