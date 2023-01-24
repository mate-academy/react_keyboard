import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [keyPressed, setKeyPressed] = useState('');

  const handleKeyDown = (e: KeyboardEvent) => {
    setKeyPressed(e.key);
  };

  useEffect(() => {
    document.addEventListener('keyup', handleKeyDown);

    return () => document.removeEventListener('keyup', handleKeyDown);
  }, []);

  return (
    <div className="App">
      {/* Keep this input for tests */}
      <input type="text" className="hidden" />
      <p className="App__message">
        {keyPressed
          ? `The last pressed key is[${keyPressed}]`
          : 'Nothing was pressed yet'}
      </p>
    </div>
  );
};
