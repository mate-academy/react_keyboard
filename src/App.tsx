import React from 'react';
import { Keyboard } from './components/keyboard';

type State = {
  pressedKey: string | null;
};

export class App extends React.Component<{}, State> {
  state: State = {
    pressedKey: null,
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">Keyboard Trainer</h1>
        <p className="App__message">
          {pressedKey
            ? `The last pressed key is [${pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>

        <Keyboard pressedKey={pressedKey || ''} />
      </div>
    );
  }
}
