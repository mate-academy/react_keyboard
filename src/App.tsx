import React from 'react';

class App extends React.Component {
  state = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyHandler);
  }

  keyHandler = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          { pressedKey.length !== 0
            ? `The last pressed key is [${pressedKey}]`
            : 'Nothing was pressed yet' }
        </p>
      </div>
    );
  }
}

export default App;
