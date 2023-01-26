import { Component } from 'react';

interface State {
  lastPressedKey: string
}

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    lastPressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keydown', this.currentPressedKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.currentPressedKey);
  }

  currentPressedKey = (event: KeyboardEvent) => {
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
