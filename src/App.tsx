import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [pressed, setPressed] = useState(false);
  const [pressedButton, setPressedButton] = useState('');

  useEffect(() => {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      setPressedButton(event.key);
      setPressed(true);
    });
  }, []);

  return (
    <div className="App">
      {pressed ? (
        <p className="App__message">
          The last pressed key is [{pressedButton}]
        </p>
      ) : (
        <p className="App__message">Nothing was pressed yet</p>
      )}
    </div>
  );
};
