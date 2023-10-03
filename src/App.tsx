import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [lastPressedKey, setLastPressedKey] = useState<string>('');

  useEffect(() => {
    return document.addEventListener('keyup', (event: KeyboardEvent) => {
      setLastPressedKey(event.key);
    });
  });

  return (
    <div className="App">
      <p className="App__message">{lastPressedKey ? `The last pressed key is [${lastPressedKey}]` : 'Nothing was pressed yet'}</p>
    </div>
  );
};
