import React, { Component } from 'react';

interface AppState {
  pressedKey: string;
}

class App extends Component<{}, AppState> {
  state: AppState = {
    pressedKey: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: `The last pressed key is ${event.key}` });
  };

  render() {
    return (
      <div className="App">
        <p className="App_message">{this.state.pressedKey}</p>
      </div>
    );
  }
}

export default App;
