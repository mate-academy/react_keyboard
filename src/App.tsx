import React from 'react';

type State = {
  lastPressedKey: string;
};

export class App extends React.Component<State> {
  state: State = {
    lastPressedKey: '',
  };

  componentDidMount(): void {
    window.addEventListener('keyup', this.handleKeyup);
  }

  componentWillUnmount(): void {
    window.removeEventListener('keyup', this.handleKeyup);
  }

  handleKeyup = (event: KeyboardEvent): void => {
    this.setState({ lastPressedKey: event.key });
  };

  render() {
    const { lastPressedKey } = this.state;

    return (
      <div className="App">
        {lastPressedKey ? (
          <p className="App__message">
            The last pressed key is [{lastPressedKey}]
          </p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
