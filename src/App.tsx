import React from 'react';

export class App extends React.Component<{}, { pressedKey: string | null }> {
  state = {
    pressedKey: null,
  };

  handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    return (
      <div className="App">
        <label htmlFor="keyInput" className="App__label">
          Press any key inside the input:
        </label>
        <input
          id="keyInput"
          className="App__input"
          onKeyUp={this.handleKeyUp}
          autoFocus
          placeholder="Type here..."
        />

        {this.state.pressedKey === null ? (
          <p className="App__message">Nothing was pressed yet</p>
        ) : (
          <p className="App__message">
            The last pressed key is [{this.state.pressedKey}]
          </p>
        )}
      </div>
    );
  }
}
