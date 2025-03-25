import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<{}, State> {
  state = {
    pressedKey: '',
  };

  handleKeypress = (event: KeyboardEvent) => {
    // eslint-disable-next-line no-console
    console.log(event.key);
    this.setState({ pressedKey: `[${event.key}]` });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeypress);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeypress);
  }

  render() {
    return (
      <div className="App">
        {this.state.pressedKey ? (
          <p className="App__message">
            The last pressed key is {`${this.state.pressedKey}`}
          </p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
