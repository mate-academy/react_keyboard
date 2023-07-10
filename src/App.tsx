import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [key, setKey] = useState<string | null>(null);

  const keyEventHandler = (event: KeyboardEvent) => {
    setKey(event.key);
  };

  useEffect(() => {
    document.addEventListener('keyup', keyEventHandler);

    return () => {
      document.removeEventListener('keyup', keyEventHandler);
    };
  }, []);

  return (
    <div className="App">
      {key ? (
        <p className="App__message">{`The last pressed key is [${key}]`}</p>
      ) : (
        <p className="App_message">Nothing was pressed yet</p>
      )}
    </div>
  );
};
