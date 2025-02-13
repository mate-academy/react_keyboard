import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [key, setKey] = useState('');

  useEffect(() => {
    const handleDocumentKeyboard = (event: KeyboardEvent) => {
      setKey(event.key);
    };

    document.addEventListener('keyup', handleDocumentKeyboard);

    return () => {
      document.removeEventListener('keyup', handleDocumentKeyboard);
    };
  }, []);

  return (
    <div className="App">
      <p className="App__message">
        {key !== ''
          ? `The last pressed key is [${key}]`
          : `Nothing was pressed yet`}
      </p>
    </div>
  );
};
