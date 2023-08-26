import React from 'react';
// eslint-disable-next-line max-len
import { LastPressedKey2 } from './ClassComponent/LastPressedKey2/LastPressedKey2';
import { LastPressedKey } from './FunctionalComponent/LastPressedKey';

export const App: React.FC = () => (
  <div className="App">
    <LastPressedKey2 />
    <LastPressedKey />
  </div>
);
