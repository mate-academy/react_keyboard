import React from 'react';

class KeyListener extends React.Component {
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
    this.setState({ pressedKey: `${this.introText + event.key}]` });
  };

  render(): React.ReactNode {
    return <>{`${this.state.pressedKey || 'Nothing was pressed yet'}`}</>;
  }
}

export const App: React.FC = () => (
  <div className="App">
    <p className="App__message">
      <KeyListener />
    </p>
  </div>
);
