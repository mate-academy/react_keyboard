import React, { useEffect } from 'react';

export const App: React.FC = () => {
  const [key, setKey] = React.useState('');

  useEffect(() => {
    const handleDocumentKeyUp = (event: KeyboardEvent) => {
      setKey(event.key);
    };

    document.addEventListener('keyup', handleDocumentKeyUp);

    return () => {
      document.removeEventListener('keyup', handleDocumentKeyUp);
    };
  }, []);

  return (
    <div className="App">
      <p className="App__message">
        {key ? (
          `The last pressed key is [${key}]`
        ) : (
          'Nothing was pressed yet'
        )}
      </p>
    </div>
  );
};
