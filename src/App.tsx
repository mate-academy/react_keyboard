import React, { useState } from 'react';

export const App: React.FC = () => {
  const [key, setKey] = useState<string>('');
  return React.createElement(
    'div',
    { className: 'App' },
    React.createElement('p', { className: 'App__message' }, 'The last pressed key is ', key)
  );
}
