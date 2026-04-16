import React from 'react';

type State = {
  pressedKey: string | null;
};

export class App extends React.Component<{}, State> {
  state: State = {
    pressedKey: null,
  };

  handleKeyboardKey = (event: KeyboardEvent) => {
    // eslint-disable-next-line no-console
    console.log(event.key);

    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyboardKey);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyboardKey);
  }

  render() {
    return (
      <div className="App">
        {this.state.pressedKey ? (
          <p className="App__message">
            The last pressed key is [{this.state.pressedKey}]
          </p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
