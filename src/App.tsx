import React from 'react';
import { PressedKey } from './Components/PressedKey';

export class App extends React.Component<{}, {}> {
  state = {};

  render() {
    return (
      <div className="App">
        <PressedKey />
      </div>
    );
  }
}
