import { Component, ReactNode } from 'react';

type State = {
  pressedKey: string | null;
};

export class App extends Component<{}, State> {
  state = {
    pressedKey: null,
  };

  componentDidMount(): void {
    document.addEventListener('keyup', (event: KeyboardEvent) => (
      this.handler(event)));
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', (event: KeyboardEvent) => (
      this.handler(event)));
  }

  handler = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render(): ReactNode {
    return (
      <div className="App">
        <div className="App__message">
          {this.state.pressedKey !== null
            ? `The last pressed key is [${this.state.pressedKey}]`
            : 'Nothing was pressed yet'}
        </div>
      </div>
    );
  }
}
