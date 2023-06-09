import React from 'react';

interface State {
  lastPressedKey: string | null;
}

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    lastPressedKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent) => {
    const currentlyPressedKey = event.key;

    this.setState({ lastPressedKey: currentlyPressedKey });
  };

  render() {
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
