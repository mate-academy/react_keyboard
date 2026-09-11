import React from 'react';
import { type State } from './types/types';

// const KeyBoard: string = () => { return };

export class App extends React.Component<{}, State> {
  state = {
    pressedKey: 'Nothing was pressed yet',
  };

  handler = (pressed: KeyboardEvent) => {
    this.setState({
      pressedKey: `The last pressed key is [${pressed.key}]`,
    });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handler);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handler);
  }

  render() {
    return <p className="App__message">{this.state.pressedKey}</p>;
  }
}
