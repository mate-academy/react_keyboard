import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [lastKeyPressed, setLastKeyPressed] = useState(
    'Nothing was pressed yet',
  );
  const handleKeyClick = (event: KeyboardEvent) => {
    setLastKeyPressed(`The last pressed key is [${event.key}]`);
  };

  useEffect(() => {
    document.addEventListener('keyup', handleKeyClick);

    return () => document.removeEventListener('keyup', handleKeyClick);
  }, []);

  return (
    <div className="App">
      <p className="App__message">{lastKeyPressed}</p>
    </div>
  );
};
