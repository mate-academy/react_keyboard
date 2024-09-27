import React from 'react';

type State = {
  pressedKey: string | null,
};

export class App extends React.Component<{}, State> {
  state = {
    pressedKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  handleKeyPress = (e: KeyboardEvent) => {
    if (e.key !== '') {
      this.setState({ pressedKey: e.key });
    }

    if (!e.key) {
      this.setState({ pressedKey: null });
    }
  };

  render() {
    const { pressedKey } = this.state;
    const message = pressedKey
      ? `The last pressed key is [${pressedKey}]`
      : 'Nothing was pressed yet';

    return (
      <div className="App">
        <p className="App__message">{message}</p>
      </div>
    );
  }
}
