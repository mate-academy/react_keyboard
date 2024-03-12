import React, { useState } from 'react';

export const App: React.FC = () => {
  const [key, setKey] = useState('Nothing was pressed yet');

  document.addEventListener('keyup', (event: KeyboardEvent) => {
    setKey(`The last pressed key is [${event.key}]`);
  });

  return (
    <div className="App">
      <p className="App__message">{key}</p>
    </div>
  );
};
