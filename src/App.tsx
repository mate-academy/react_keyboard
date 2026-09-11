import React from 'react';
import { type State } from './types/types';

// const KeyBoard: string = () => { return };

export class App extends React.Component<{}, State> {
  state = {
    pressedKey: 'Nothing was pressed yet',
  };

  handleKeyUp = (event: KeyboardEvent) => {
    console.log(event.key); // eslint-disable-line no-console

    this.setState({
      pressedKey: `The last pressed key is [${event.key}]`,
    });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    return <p className="App__message">{this.state.pressedKey}</p>;
  }
}
