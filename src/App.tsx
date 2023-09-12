import React from 'react';

type State = {
  pressedKey: string,
};

export class App extends React.Component<{}, State> {
  state: State = {
    pressedKey: '',
  };

  NO_PRESSED_KEY_MESSAGE = 'Nothing was pressed yet';

  PRESSED_KEY_MESSAGE = 'The last pressed key is';

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  handleKeyPress = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {!this.state.pressedKey
            ? this.NO_PRESSED_KEY_MESSAGE
            : `${this.PRESSED_KEY_MESSAGE} [${this.state.pressedKey}]`}
        </p>
      </div>
    );
  }
}
