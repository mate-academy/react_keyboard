import React from 'react';

type State = {
  pressedKey: React.ChangeEvent<HTMLInputElement> | null;
};

export class App extends React.Component<State> {
  state: Readonly<State> = {
    pressedKey: null,
  };

  handleKeyBoard = (value: string) => {
    this.setState({ pressedKey: value });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      event.preventDefault();
      this.handleKeyBoard(event.key);
    });
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', event =>
      this.handleKeyBoard(event.key),
    );
  }

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
