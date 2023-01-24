import { Component } from 'react';

type State = {
  pressedKey: boolean | string;
};

export class App extends Component<{}, State> {
  state: State = {
    pressedKey: false,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.clickHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.clickHandler);
  }

  clickHandler = (e: KeyboardEvent) => {
    this.setState({ pressedKey: e.key });
  };

  render() {
    const { pressedKey } = this.state;
    const message = pressedKey
      ? `The last pressed key is [${pressedKey}]`
      : 'Nothing was pressed yet';

    return (
      <div className="App">
        <p className="App__message">{message}</p>
      </div>
    );
  }
}
