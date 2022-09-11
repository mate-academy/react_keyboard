import React from 'react';

type State = {
  pressedKey: string;
};

class App extends React.Component <{}, State> {
  state = { pressedKey: 'Nothing was pressed yet' };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyboardEvent);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyboardEvent);
  }

  handleKeyboardEvent = (event: KeyboardEvent) => {
    this.setState({
      pressedKey: `The last pressed key is [${event.key}]`,
    });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">{this.state.pressedKey}</p>
      </div>
    );
  }
}

export default App;
