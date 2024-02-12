import React from 'react';

interface AppState {
  pressKey: string | null;
}

export class App extends React.Component<{}, AppState> {
  state: Readonly<AppState> = {
    pressKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', (e: KeyboardEvent) => {
      this.handleKeyPress(e);
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', (e: KeyboardEvent) => {
      this.handleKeyPress(e);
    });
  }

  handleKeyPress = (e: KeyboardEvent) => {
    this.setState({ pressKey: e.key });
  };

  render() {
    const { pressKey } = this.state;

    return (
      <div>
        {pressKey ? (
          <p>
            The last pressed key is [
            {pressKey}
            ]
          </p>
        ) : (
          <p>Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
