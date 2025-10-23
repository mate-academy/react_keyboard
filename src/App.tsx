import React,  { useState } from 'react';

interface AppProps {
  keyHistory: string[] | null;
  lastKey: string;

}
export const App: React.FC<AppProps>= () => {
  const [lastKey, setLastKey] = useState<string>('');
  const [keyHistory, setKeyHistory] = useState<string[]>([]);
  
  React.useEffect(() => {
  const handleKeyDown = (event: KeyboardEvent) => {
    setLastKey(event.key);
  }

  const keyDownListener = React.useCallback(handleKeyDown, []);
  
    const handleKeyUp = (event: KeyboardEvent) => {
      setLastKey(event.key);
    };
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  React.useEffect(() => {
    document.addEventListener('keydown', keyDownListener);
    return () => {
      document.removeEventListener('keydown', keyDownListener);
    };
  }, [keyDownListener]);

  componentWillUnmount() {
    document.removeEventListener('keydown', keyDownListener);
  }
  return (
    <div className="App">
      {keyHistory ? (
        <p className="App__message">The last pressed key is [{lastKey}]</p>
      ) : (
        <p className="App__message">No key pressed yet</p>
      )}
    </div>
  );
};
