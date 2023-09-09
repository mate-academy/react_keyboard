import React from 'react';

type State = {
  pressedKey: string,
};
export class App extends React.Component<{}, State> {
  state: State = {
    pressedKey: '',
  };

  private NO_KEY_PRESSED = 'Nothing was pressed yet';

  componentDidMount(): void {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ pressedKey: event.key });
    });
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ pressedKey: event.key });
    });
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKey
            ? `The last pressed key is [${this.state.pressedKey}]`
            : this.NO_KEY_PRESSED}
        </p>
      </div>
    );
  }
}
