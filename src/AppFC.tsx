import React from 'react';
import { useEffect } from 'react';

export const AppFC: React.FC = () => {
  const [pressedKey, setPressedKey] = React.useState<string>('');

  // componentDidMount ananlog
  useEffect(() => {
    const handleKeyChange = (event: KeyboardEvent) => {
      setPressedKey(event.key);
    };

    document.addEventListener('keyup', handleKeyChange);
    // componentWillUnmount analog

    return () => {
      document.removeEventListener('keyup', handleKeyChange);
    };
  }, []);

  return (
    <>
      {pressedKey ? (
        <p className="App__message">
          The last pressed key is === [{pressedKey}]
        </p>
      ) : (
        <p className="App__message">Nothing was pressed yet</p>
      )}
    </>
  );
};

// return (
//   {pressedKey ? (
//     <p className="App__message">The last pressed key is [{pressedKey}]</p>
//   ) : (
//     <p className="App__message">Nothing was pressed yet</p>
//   );}
// )
