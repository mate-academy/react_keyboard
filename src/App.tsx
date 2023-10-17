import React from 'react';

type AppState = {
  lastPressedKey: string;
};

export class App extends React.Component<{}, AppState> {
  state: AppState = {
    lastPressedKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ lastPressedKey: event.key });
  };

  render() {
    return (
      <div className="App">

        {this.state.lastPressedKey ? (
          <p className="App__message">
            The last pressed key is [
            {this.state.lastPressedKey}
            ]
          </p>
        ) : (
          'Nothing was pressed yet'
        )}

      </div>
    );
  }
}
