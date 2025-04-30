import React from 'react';

type State = {
  pressedKey: string | null;
};

export class App extends React.Component<{}, State> {
  state: State = {
    pressedKey: null,
  };

  handleKeyUp = (event: React.KeyboardEvent<HTMLDivElement>) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    return (
      <div className="App" onKeyUp={this.handleKeyUp} tabIndex={0}>
        <p className="App__message">
          {this.state.pressedKey
            ? `The last pressed key is [${this.state.pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
