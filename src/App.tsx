import { Component } from 'react';

interface AppState {
  pressedKey: string | null;
}

export class App extends Component<{}, AppState> {
  state: Readonly<AppState> = {
    pressedKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleButtonPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleButtonPress);
  }

  handleButtonPress = (event: KeyboardEvent) => {
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
