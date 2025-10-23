import { useEffect, useState } from 'react';
import { useCallback } from 'react';

export const App: React.FC= () => {
  const [lastKey, setLastKey] = useState<string>('');
  const [keyHistory, setKeyHistory] = useState<string[]>([]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setLastKey(event.key);
      setKeyHistory((prevHistory) => [...prevHistory, event.key]);
    }
      window.addEventListener('keyup', handleKeyDown);
          return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);


  // componentWillUnmount() {
  //   window.removeEventListener('keydown', handleKeyDown);
  // }
  return (
    <div className="App">
      {keyHistory.length > 0 ? (
        <p className="App__message">The last pressed key is [{lastKey}]</p>
      ) : (
        <p className="App__message">Nothing was pressed yet</p>
      )}
    </div>
  );
};
