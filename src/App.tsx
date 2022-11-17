import { Component } from 'react';

type State = {
  pressedKey: string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', (this.getEventOfGlobalHandler));
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', (this.getEventOfGlobalHandler));
  }

  getEventOfGlobalHandler = (event: KeyboardEvent) => {
    this.setState({ pressedKey: `${event.key}` });
  };

  render() {
    const { pressedKey } = this.state;

    return pressedKey.length
      ? (
        <div className="App">
          <p className="App__message">
            {`The last pressed key is [${pressedKey}]`}
          </p>
        </div>
      )
      : (
        <div className="App">
          <p className="App__message">
            Nothing was pressed yet
          </p>
        </div>
      );
  }
}
