import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [lastKeyPressed, setLastKeyPressed] = useState('');

  useEffect(() => {
    const handlerDocumentKeyboardPress = (event: KeyboardEvent) => {
      setLastKeyPressed(event.key);
    };

    document.addEventListener('keydown', handlerDocumentKeyboardPress);

    return () => {
      document.removeEventListener('keydown', handlerDocumentKeyboardPress);
    };
  });

  return (
    <div className="App">
      <p className="App__message">
        {lastKeyPressed
          ? (`The last pressed key is [${lastKeyPressed}]`)
          : ('Nothing was pressed yet')}
      </p>
    </div>
  );
};
