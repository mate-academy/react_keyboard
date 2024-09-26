import { useEffect, useState } from 'react';

export const AppFC:React.FC = () => {
  const [pressedKey, setPressedKey] = useState('');

  useEffect(() => {
    const pressKey = (event: KeyboardEvent) => {
      setPressedKey(event.key);
    };

    document.addEventListener('keyup', pressKey);

    return () => {
      document.removeEventListener('keyup', pressKey);
    };
  }, []);

  return (
    <div className="App">
      {pressedKey
        ? (
          <p className="App__message">
            The last pressed key is
            {` [${pressedKey}]`}
          </p>
        )
        : (
          <p> Nothing was pressed yet</p>
        )}
    </div>
  );
};
