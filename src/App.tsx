import { Component } from 'react';

type State = {
  pressedKey: string | null,
};

export class App extends Component<{}, State> {
  state = {
    pressedKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKey);
  }

  handleKey = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    return (
      <div className="App">
        {!this.state.pressedKey
          ? <p className="App__message">Nothing was pressed yet</p>
          : <p className="App__message">{`The last pressed key is [${this.state.pressedKey}]`}</p>}
      </div>
    );
  }
}
