/* eslint-disable react/state-in-constructor */
import React from 'react';

type AppState = {
  pressedKey: string | null;
};

export class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      pressedKey: null, // no key pressed initially
    };
  }

  // Class-bound handler for keyup events
  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount() {
    // Add global keyup listener
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    // Clean up listener
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    return (
      <div className="App">
        {this.state.pressedKey === null ? (
          <p className="App__message">Nothing was pressed yet</p>
        ) : (
          <p className="App__message">
            The last pressed key is {this.state.pressedKey}
          </p>
        )}
      </div>
    );
  }
}
