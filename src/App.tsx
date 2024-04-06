import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [key, setKey] = useState('');

  useEffect(() => {
    const handleKeyClick = (event: KeyboardEvent) => {
      setKey(event.key);
    }; // event

    document.addEventListener('keyup', handleKeyClick);
    // componentDidMount (turn on listenr when component on first render)

    return () => {
      document.removeEventListener('keyup', handleKeyClick);
    };
    // componentWillUnmount delete this Listener when component App. hide
  }, []);

  const hasKey = key
    ? `The last pressed key is [${key}]`
    : 'Nothing was pressed yet';

  return (
    <div className="App">
      <p className="App__message">{hasKey}</p>
    </div>
  );
};
