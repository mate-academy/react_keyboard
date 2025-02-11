import React, { useEffect, useRef, useState } from 'react';

export const App: React.FC = () => {
  const [message, setMessage] = useState('Nothing was pressed yet');
  const key = useRef('');

  useEffect(() => {
    const handleKeyUp = (event: KeyboardEvent) => {
      key.current = (event.key);
      setMessage(`The last pressed key is [${key.current}]`);
    };

    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div className="App">
      <p className="App__message">{message}</p>
    </div>
  );
};
