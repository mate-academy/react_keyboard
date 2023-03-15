import { Component } from 'react';

type State = {
  pressedKey: string,
};

export class App extends Component<{}, State> {
  state = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyboardClick);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyboardClick);
  }

  handleKeyboardClick = (event: KeyboardEvent) => {
    const pressedKey = event.key;

    this.setState({ pressedKey });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKey
            ? `The last pressed key is [${this.state.pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
