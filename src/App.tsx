import { Component } from 'react';

class App extends Component {
  state = {
    isPressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  handleKeyPress = (event: KeyboardEvent) => {
    event.stopPropagation();
    this.setState({ isPressedKey: event.key });
  };

  render() {
    const { isPressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {isPressedKey ? `The last pressed key is [${isPressedKey}]` : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

export default App;
