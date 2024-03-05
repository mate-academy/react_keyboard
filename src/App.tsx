import React from 'react';

interface AppState {
  lastPressedKey: string | null;
}

export class App extends React.Component<{}, AppState> {
  state: AppState = {
    lastPressedKey: null,
  };

  // eslint-disable-next-line react/sort-comp
  handleKeyPress = (event: KeyboardEvent) => {
    const pressedKey = event.key;

    this.setState({ lastPressedKey: pressedKey });
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  render(): React.ReactNode {
    const { lastPressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {lastPressedKey
            ? `The last pressed key is [${lastPressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
