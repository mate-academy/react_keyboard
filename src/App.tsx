import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [pressedkey, setPressedKey] = useState<null | string>(null);

  useEffect(() => {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      if (event.code === 'Space') {
        setPressedKey('[]');
      } else {
        setPressedKey(event.key);
      }
    });
  }, []);

  return (
    <div className="App">
      <p className="App__message">
        {pressedkey
          ? `The last pressed key is [${pressedkey}]`
          : 'Nothing was pressed yet'}
      </p>
    </div>
  );
};
