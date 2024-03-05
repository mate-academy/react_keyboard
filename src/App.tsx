import React from 'react';

type State = {
  pressedKey: string | null,
};

export class App extends React.Component<{}, State> {
  state: State = {
    pressedKey: null,
  };

  componentDidMount(): void {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.handleKeyUp(event);
    });
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', (event: KeyboardEvent) => {
      this.handleKeyUp(event);
    });
  }

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const message = this.state.pressedKey === null
      ? 'Nothing was pressed yet'
      : `The last pressed key is [${this.state.pressedKey}]`;

    return (
      <div className="App">
        <p className="App__message">
          {message}
        </p>
      </div>
    );
  }
}
