import React from 'react';
import { type State } from './types/types';

// const KeyBoard: string = () => { return };

export class App extends React.Component<{}, State> {
  state = {
    pressedKey: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({
        pressedKey: `The last pressed key is [${event.key}]`,
      });
    });
  }

  render() {
    return <p className="App__message">{this.state.pressedKey}</p>;
  }
}
