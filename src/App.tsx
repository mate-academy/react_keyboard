import React, { Component } from 'react';

class App extends Component {
  state = {
    pressedKey: 'Nothing was pressed yet',
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: `The last pressed key is [${event.key}]` });
  };

  componentDidMount() {
    this.setState({ pressedKey: 'Nothing was pressed yet' });
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">{this.state.pressedKey}</p>
      </div>
    );
  }
}

export default App;
