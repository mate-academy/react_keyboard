import { Component } from 'react';

type State = {
  pressedKey: string
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyupEventHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyupEventHandler);
  }

  keyupEventHandler = (event: KeyboardEvent) => {
    this.setState({ pressedKey: `The last pressed key is [${event.key}]` });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey}
        </p>
      </div>
    );
  }
}
