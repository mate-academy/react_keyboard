import React, { useEffect, useRef, useState } from 'react';

export const App: React.FC = () => {
  const [message, setMessage] = useState('');
  const [key, setKey] = useState('');

  const firstRender = useRef(true);

  useEffect(() => {
    const handleKeyUp = (event: KeyboardEvent) => {
      setKey(event.key);
    };

    setMessage('Nothing was pressed yet');

    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;

      return;
    }

    setMessage(`The last pressed key is [${key}]`);
  }, [key]);

  return (
    <div className="App">
      <p className="App__message">{message}</p>
    </div>
  );
};
