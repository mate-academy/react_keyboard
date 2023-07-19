import React, { useEffect, useState } from 'react';

export const AppAsFC: React.FC = () => {
  const [key, setKey] = useState('');

  useEffect(() => {
    const handleDocumentKeyPress = (event: KeyboardEvent) => {
      setKey(event.key);
    };

    document.addEventListener('keyup', handleDocumentKeyPress);

    return () => {
      document.removeEventListener('keyup', handleDocumentKeyPress);
    };
  }, []);

  return (
    <>
      <div className="App">
        <p className="App__message">
          {(key !== '')
            ? (`The last pressed key is [${key}]`)
            : ('Nothing was pressed yet')}
        </p>
      </div>
    </>
  );
};
