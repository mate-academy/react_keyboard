import React, { useEffect, useState } from 'react';

type Props = {
  message: string;
};

export const Classcomponents: React.FC<Props> = () => {
  const [message, setMessage] = useState<string>('Nothing was pressed yet');

  const handleKeyUp = (event: KeyboardEvent) => {
    setMessage(`The last pressed key is [${event.key}]`);
  };

  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  });

  return (
    <div className="App">
      <p className="App__message">{message}</p>
    </div>
  );
};
