import { Component } from 'react';

type State = {
  pressedKey: string;
};

export class App extends Component<{}, State> {
  state = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = (e: KeyboardEvent) => {
    this.setState({ pressedKey: e.key });
  };

  render() {
    return (
      this.state.pressedKey
        ? <p className="App__message">{`The last pressed key is [${this.state.pressedKey}]`}</p>
        : <p className="App__message">Nothing was pressed yet</p>
    );
  }
}
