import React from 'react';

interface State {
  pressedKey: string;
}

export class App extends React.Component<{}, State> {
  state = {
    pressedKey: 'Nothing was pressed yet',
  };

  componentDidMount(): void {
    window.addEventListener('keydown', this.handleKeyboardPress);
  }

  componentWillUnmount(): void {
    window.removeEventListener('keydown', this.handleKeyboardPress);
  }

  handleKeyboardPress = (event: KeyboardEvent): void => {
    this.setState({ pressedKey: `The last pressed key is [${event.key}]` });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKey}
        </p>
      </div>
    );
  }
}
