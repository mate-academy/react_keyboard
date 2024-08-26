import React from 'react';
import { useState } from 'react';
import { Keyboard } from './components/keyboard';

export const App: React.FC = () => {
  const [keyUp, setKeyUp] = useState('');
  const [pressedKey, setPressedKey] = useState(false);

  // document.addEventListener('keyup', (event: KeyboardEvent) => {
  //   setKeyUp(event.key);
  //   setPressedKey(true);
  // });

  const defoultMessege = 'Nothing was pressed yet';

  return (
    <div className="App">
      {!pressedKey ? (
        <p className="App__message">{defoultMessege}</p>
      ) : (
        // <KeyboardMessage keyUp={keyUp} />
        <Keyboard
          keyUp={keyUp}
          setKeyUp={setKeyUp}
          setPressedKey={setPressedKey}
        />
      )}
    </div>
  );
};
