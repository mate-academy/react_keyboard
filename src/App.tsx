import React from 'react';

interface State {
  pressedKey: string | null;
}

class App extends React.Component<{}, State> {
  state: State = {
    pressedKey: null,
  };

  handleKeyUp = (event: KeyboardEvent) =>
    this.setState({ pressedKey: event.key });

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
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

export { App };
