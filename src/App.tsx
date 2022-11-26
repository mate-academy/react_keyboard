import React from 'react';

class App extends React.Component {
  state = {
    keyup: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.getClickedKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.getClickedKeyUp);
  }

  getClickedKeyUp = (e: KeyboardEvent) => {
    this.setState({ keyup: e.key });
  };

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
