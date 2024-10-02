import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    pressedKey: '',
  };

  handleKeyboardClick = (event: KeyboardEvent) => {
    return event.key !== 'F5' && this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyboardClick);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyboardClick);
  }

  render() {
    const isKeyPressed = this.state.pressedKey;

    return (
      <div className="App">
        <p className="App__message">
          {isKeyPressed
            ? `The last pressed key is [${this.state.pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
