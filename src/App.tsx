import { Component } from 'react';

type State = {
  lastPressedKey: string;
};

export class App extends Component<{}, State> {
  state = {
    lastPressedKey: '',
  };

  componentDidMount() {
    document.addEventListener(
      'keydown', this.keyboardHandler,
    );
  }

  componentWillUnmount() {
    document.removeEventListener(
      'keydown', this.keyboardHandler,
    );
  }

  keyboardHandler = (event: KeyboardEvent) => {
    this.setState({ lastPressedKey: event.key });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {
            this.state.lastPressedKey
              ? (`The last pressed key is [${this.state.lastPressedKey}]`)
              : ('Nothing was pressed yet')
          }
        </p>
      </div>
    );
  }
}
