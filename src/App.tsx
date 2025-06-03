import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [symbol, setSybol] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => setSybol(event.key);

    document.addEventListener('keyup', handleKeyPress);

    return () => document.removeEventListener('keyup', handleKeyPress);
  }, [symbol]);

  return (
    <div className="App">
      <p className="App__message">
        {symbol === null
          ? 'Nothing was pressed yet'
          : `The last pressed key is [${symbol}]`}
      </p>
    </div>
  );
};
