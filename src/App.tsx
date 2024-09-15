import React from 'react';

type AppState = {
  pressedKey: string;
};

export class App extends React.Component<{}, AppState> {
  state: AppState = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ pressedKey: event.key });
    });
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ pressedKey: event.key });
    });
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey ? (
            `The last pressed key is [${pressedKey}]`
          ) : (
            'Nothing was pressed yet'
          )}
        </p>
      </div>
    );
  }
}
