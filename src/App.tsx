import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [lastPressedKey, setLastPressedKey] = useState(
    'Nothing was pressed yet',
  );

  useEffect(() => {
    const handleKeyUp = (event: KeyboardEvent) => {
      setLastPressedKey(`The last pressed key is [${event.key}]`);
    };

    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div className="App">
      <p className="App__message">{lastPressedKey}</p>
    </div>
  );
};
