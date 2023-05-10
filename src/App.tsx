import React from 'react';

interface AppState {
  pressedKey: string,
}

class KeyListener extends React.Component<{}, AppState> {
  state = {
    pressedKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  handleKeyPress = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render(): React.ReactNode {
    const { pressedKey } = this.state;

    return (
      <>
        {pressedKey
          ? `The last pressed key is [${pressedKey}]`
          : 'Nothing was pressed yet'}
      </>
    );
  }
}

export const App: React.FC = () => (
  <div className="App">
    <p className="App__message">
      <KeyListener />
    </p>
  </div>
);
