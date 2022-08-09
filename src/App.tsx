import React, { Component } from 'react';

interface State {
  pressedKey: string,
}

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handlePressedKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handlePressedKey);
  }

  handlePressedKey = (event: KeyboardEvent) => (
    event.code === 'Space'
      ? this.setState({ pressedKey: event.code })
      : this.setState({ pressedKey: event.key })
  );

  render(): React.ReactNode {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey
            ? `The last pressed key is [${pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
