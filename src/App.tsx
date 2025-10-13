import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [pressedKey, setPressedKey] = useState<string | null>(null);

  const handlePressedKey = (event: KeyboardEvent) => {
    setPressedKey(event.key);
  };

  useEffect(() => {
    document.addEventListener('keyup', handlePressedKey);

    return () => {
      document.removeEventListener('keyup', handlePressedKey);
    };
  }, []);

  return (
    <div className="App">
      <p className="App__message">
        {!pressedKey
          ? 'Nothing was pressed yet'
          : `The last pressed key is [${pressedKey}]`}
      </p>
    </div>
  );
};
