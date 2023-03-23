import { Component } from 'react';

type State = {
  pressedKey: string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyChanger);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyChanger);
  }

  keyChanger = (event: KeyboardEvent): void => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;
    const pressed = pressedKey
      ? `The last pressed key is [${pressedKey}]`
      : 'Nothing was pressed yet';

    return (
      <div className="App">
        <p className="App__message">
          { pressed }
        </p>
      </div>
    );
  }
}
