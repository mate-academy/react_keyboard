import { Component } from 'react';

type State = {
  lastPressKey: string;
};

export class App extends Component<{}, State> {
  state = {
    lastPressKey: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.lastPressKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.lastPressKey);
  }

  lastPressKey = (event: KeyboardEvent) => {
    this.setState({ lastPressKey: `The last pressed key is [${event.key}]` });
  };

  render() {
    const { lastPressKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">{lastPressKey}</p>
      </div>
    );
  }
}
