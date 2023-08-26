import { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [key, setKey] = useState('');

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      setKey(event.key);
      // console.log(event.key);
    };

    document.addEventListener('keyup', handleKeyPress);

    return () => {
      document.removeEventListener('keyup', handleKeyPress);
    };
  });

  return (
    <>
      {key ? (
        <div className="App__message">{`The last pressed key is [${key}]`}</div>
      ) : (
        <div className="App__message">Nothing was pressed yet</div>
      )}
    </>
  );
};
