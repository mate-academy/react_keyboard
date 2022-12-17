import { Component } from 'react';

type State = {
  pressedKey: string | null;
};

export class App extends Component<{}, State> {
  state: State = {
    pressedKey: null,
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyup.bind(this));
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyup.bind(this));
  }

  handleKeyup(e:KeyboardEvent) {
    this.setState({ pressedKey: e.key });
  }

  render() {
    const key = this.state.pressedKey;
    const message = key ? `The last pressed key is [${key}]` : 'Nothing was pressed yet';

    return (
      <div className="App">
        <p className="App__message">{message}</p>
      </div>
    );
  }
}
