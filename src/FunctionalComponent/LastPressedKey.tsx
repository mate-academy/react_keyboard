import { useEffect, useState } from 'react';

export const LastPressedKey: React.FC = () => {
  const [key, setKey] = useState('');

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      setKey(event.key);
    };

    document.addEventListener('keyup', handleKeyPress);

    return () => {
      document.removeEventListener('keyup', handleKeyPress);
    };
  });

  return (
    <div>
      {!key ? (
        <p>Nothing was pressed yet</p>
      ) : (
        <p className="App__message">{`The last pressed key is [${key}]`}</p>
      )}
    </div>
  );
};
