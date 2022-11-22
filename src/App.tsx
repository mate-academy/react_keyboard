import React from 'react';

class App extends React.Component {
  state = {
    keyup: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ keyup: event.key });
    });
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          { this.state.keyup
            ? `The last pressed key is [${this.state.keyup}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

export default App;
