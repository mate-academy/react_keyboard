import React, { Component } from 'react';

interface AppState {
  pressedKey: string | null;
}
class App extends Component<{}, AppState> {
  state: AppState = {
    pressedKey: null,
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({
      pressedKey: event.key,
    });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    const { pressedKey } = this.state;

    let message;

    if (pressedKey) {
      message = `The last pressed key is [${pressedKey}]`;
    } else {
      message = 'Nothing was pressed yet';
    }

    return (
      <div className="App">
        <p className="App__message">{message}</p>
      </div>
    );
  }
}

export default App;
