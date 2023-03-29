import { Component } from 'react';

type State = {
  lastPressedKey: string;
};

export class App extends Component<{}, State> {
  state = {
    lastPressedKey: 'Nothing was pressed yet',
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
    this.setState({ lastPressedKey: `The last pressed key is [${event.key}]` });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">{this.state.lastPressedKey}</p>
      </div>
    );
  }
}
