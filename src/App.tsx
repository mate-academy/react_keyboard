import React from 'react';

interface AppState {
  pressedKey: string | null;
}

export class App extends React.Component<{}, AppState> {
  state: AppState = {
    pressedKey: null,
  };

  handleKeyUp = (event: React.KeyboardEvent<HTMLDivElement>) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div
        className="App"
        tabIndex={0} // importante para div poder receber foco e capturar key events
        onKeyUp={this.handleKeyUp}
      >
        <p className="App__message">
          {pressedKey
            ? `The last pressed key is [${pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
