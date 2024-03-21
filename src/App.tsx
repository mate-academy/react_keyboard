import { Component } from 'react';

type State = {
  pressedKey: string;
};

export class App extends Component<{}, State> {
  state: State = {
    pressedKey: '',
  };

  handleKeyup = (e: KeyboardEvent) => {
    this.setState({ pressedKey: e.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyup);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyup);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKey
            ? `The last pressed key is [${this.state.pressedKey}]`
            : `Nothing was pressed yet`}
        </p>
      </div>
    );
  }
}
