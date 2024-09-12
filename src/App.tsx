import { Component } from 'react';

interface State {
  pressedKey: string | null;
}

export class App extends Component {
  state: Readonly<State> = {
    pressedKey: null,
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.pressedKeyFromTheKeyboard);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.pressedKeyFromTheKeyboard);
  }

  pressedKeyFromTheKeyboard = (event: KeyboardEvent) => {
    this.setState({
      pressedKey: event.key,
    });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey
            ? `The last pressed key is [${pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
