import React from 'react';

export class App extends React.Component {
  state = { pressedKey: '' };

  handleKeyUp = (e: KeyboardEvent) => {
    this.setState({ pressedKey: e.key });
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
          {this.state.pressedKey.length === 0
            ? 'Nothing was pressed yet'
            : 'The last pressed key is ' + '[' + this.state.pressedKey + ']'}
        </p>
      </div>
    );
  }
}

export default App;
