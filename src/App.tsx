import React, { useCallback, useEffect, useRef, useState } from 'react';
import { debounce } from 'lodash';

export const App: React.FC = () => {
  const [pressedKey, setPressedKey] = useState<string>('');
  const debouncedSetKey = useRef(debounce(setPressedKey, 200)).current;

  const getKey = useCallback(
    (event: KeyboardEvent) => {
      debouncedSetKey(event.key);
    },
    [debouncedSetKey],
  );

  useEffect(() => {
    window.addEventListener('keydown', getKey);

    return () => {
      window.removeEventListener('keydown', getKey);
    };
  }, [getKey]);

  return (
    <div className="App">
      <p className="App__message">
        {pressedKey
          ? `The last pressed key is [${pressedKey}]`
          : `Nothing was pressed yet`}
      </p>
    </div>
  );
};
