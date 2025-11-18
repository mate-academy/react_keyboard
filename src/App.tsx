import React from 'react';

type AppState = {
  pressedKey: string | null;
};

export class App extends React.Component<{}, AppState> {
  state: AppState = {
    pressedKey: null,
  };

  // store the listener as a class property so we can remove it later
  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount() {
    // DON'T import KeyboardEvent from React, because it is a regular event
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey === null
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${pressedKey}]`}
        </p>
      </div>
    );
  }
}
