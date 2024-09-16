import React from 'react';

interface AppState {
  pressKey: string | null;
}

export class App extends React.Component<{}, AppState> {
  state: Readonly<AppState> = {
    pressKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', (e: KeyboardEvent) => {
      this.handleKeyPress(e);
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', (e: KeyboardEvent) => {
      this.handleKeyPress(e);
    });
  }

  handleKeyPress = (e: KeyboardEvent) => {
    this.setState({ pressKey: e.key });
  };

  render() {
    const message = this.state.pressKey === null
      ? 'Nothing was pressed yet'
      : `The last pressed key is [${this.state.pressKey}]`;

    return (
      <div className="App">
        <p className="App__message">
          {message}
        </p>
      </div>
    );
  }
}
