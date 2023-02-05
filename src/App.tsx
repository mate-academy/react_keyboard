import { Component } from 'react';

type State = {
  pressedKey: string,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyboardHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyboardHandler);
  }

  keyboardHandler = (event: KeyboardEvent) => {
    this.setState({ pressedKey: `The last pressed key is [${event.key}]` });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey || 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
