import React from 'react';

interface AppState {
  pressedKey: string,
}

class KeyListener extends React.Component<{}, AppState> {
  state = {
    pressedKey: '',
  };

  introText = 'The last pressed key is [';

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
    return (
      <>
        {this.state.pressedKey
          ? `The last pressed key is [${this.state.pressedKey}]`
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
