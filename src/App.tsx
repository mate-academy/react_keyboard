import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [key, setKey] = useState<string | undefined>();
  const keyProvider = (event: KeyboardEvent) => setKey(event.key);

  useEffect(() => {
    document.addEventListener('keyup', keyProvider);

    return () => {
      document.removeEventListener('keyup', keyProvider);
    };
  });

  return (
    <div className="App">
      <p className="App__message">
        {key ? `The last pressed key is [${key}]` : 'Nothing was pressed yet'}
      </p>
    </div>
  );
};
