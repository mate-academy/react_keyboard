import React from 'react';

type State = {
  lastPressedKey: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    lastPressedKey: '',
  };

  handleKeyPress = (event: KeyboardEvent) => {
    this.setState({ lastPressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  render() {
    const { lastPressedKey } = this.state;

    return (
      <div className="App">
        {lastPressedKey === '' ? (
          <p className="App__message">Nothing was pressed yet</p>
        ) : (
          <p className="App__message">
            The last pressed key is [{lastPressedKey}]
          </p>
        )}
      </div>
    );
  }
}
