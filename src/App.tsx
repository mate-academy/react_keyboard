import React, { Component } from 'react';

interface AppState {
  pressedKey: string;
}

class App extends Component<{}, AppState> {
  state: AppState = {
    pressedKey: 'Nothing was pressed yet'
  };


  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKey === 'Nothing was pressed yet'
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${this.state.pressedKey}]`}
        </p>
      </div>
    );
  }
}

export default App;
