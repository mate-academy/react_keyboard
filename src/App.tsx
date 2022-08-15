import React from 'react';

type State = {
  pressedKey: string,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handlePressedKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handlePressedKey);
  }

  handlePressedKey = (event: KeyboardEvent) => {
    if (event.key) {
      this.setState({ pressedKey: event.key });
    }
  };

  render() {
    const { pressedKey } = this.state;
    let message = '';

    if (pressedKey) {
      message = `The last pressed key is <${pressedKey}>`;
    }

    return (
      <div className="App">
        <p className="App__message">{message || 'Nothing was pressed yet'}</p>
      </div>
    );
  }
}
