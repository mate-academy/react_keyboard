import React, { Component } from 'react';

type State = {
  pressedKey: string | EventTarget | null,
};

export class App extends Component<{}, State> {
  state = {
    pressedKey: 'Nothing was pressed yet',
  };

  componentDidMount(): void {
    document.documentElement.addEventListener('keydown', this.keyHandler);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keydown', this.keyHandler);
  }

  keyHandler = (event: KeyboardEvent) => {
    this.setState({ pressedKey: `The last pressed key is [${event.key}]` });
  };

  render(): React.ReactNode {
    return (
      <div className="App">
        <p className="App__message">{ this.state.pressedKey}</p>
      </div>
    );
  }
}
