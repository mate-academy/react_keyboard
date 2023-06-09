import { Component } from 'react';

type State = {
  lastPressedKey: string | null;
};

export class App extends Component<{}, State> {
  state = {
    lastPressedKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyboardKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyboardKey);
  }

  handleKeyboardKey = (event: KeyboardEvent) => {
    this.setState({ lastPressedKey: event.key });
  };

  render() {
    const { lastPressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {
            lastPressedKey
              ? `The last pressed key is [${lastPressedKey}]`
              : 'Nothing was pressed yet'
          }
        </p>
      </div>
    );
  }
}
