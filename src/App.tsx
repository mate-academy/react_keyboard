import { Component } from 'react';

type State = {
  pressedKey: string,
};
export class App extends Component<{}, State> {
  state = {
    pressedKey: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.changePressed);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.changePressed);
  }

  changePressed = (e: KeyboardEvent) => {
    this.setState({ pressedKey: e.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {`The last pressed key is ${pressedKey}`}
        </p>
      </div>
    );
  }
}
