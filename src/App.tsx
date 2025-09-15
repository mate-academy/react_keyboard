import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [massage, setMassage] = useState<string>('Nothing was pressed yet');

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setMassage(`The last pressed key is [${event.key}]`);
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="App">
      <p className="App__message">{massage}</p>
    </div>
  );
};
