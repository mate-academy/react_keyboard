import { Component } from 'react';

type State = {
  pressedKey: string | null,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.namePressedButton);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.namePressedButton);
  }

  namePressedButton = (event: KeyboardEvent) => {
    const pressedKey = event.key;

    this.setState({ pressedKey });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        { pressedKey ? (
          <p className="App__message">
            {`The last pressed key is [${pressedKey}]`}
          </p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
