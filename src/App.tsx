import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {

  const [key, setKey] = useState<string>('');


  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      setKey(event.key);
    };

    window.addEventListener('keydown', handleKey);

    return () => {
      window.removeEventListener('keydown', handleKey);
    };
  }, []);



  return (
    <div className="App">
      {key ? <p className="App__message">The last pressed key is [{key}]</p> : <p className='App__message'>Nothing was pressed yet</p>}
    </div>
  );
};
