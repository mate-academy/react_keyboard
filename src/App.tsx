import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [message, setMessage] = useState('Nothing was pressed yet');

  useEffect(() => {
    const pressedKey = (event: KeyboardEvent) => {
      setMessage(`The last pressed key is [${event.key}]`);
    };

    window.addEventListener('keyup', pressedKey);

    return () => {
      window.removeEventListener('keyup', pressedKey);
    };
  }, []);

  return (
    <div className="App">
      <p className="App__message">{message}</p>
    </div>
  );
};
