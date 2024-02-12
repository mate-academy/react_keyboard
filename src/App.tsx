import React from 'react';

interface AppState {
  pressKey: string | null;
}

export class App extends React.Component<{}, AppState> {
  state: Readonly<AppState> = {
    pressKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  handleKeyPress = (e: KeyboardEvent) => {
    this.setState({ pressKey: e.key.toString() });
  };

  render(): React.ReactNode {
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
