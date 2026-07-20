import React from 'react';

export class App extends React.Component {
  state = {
    pressedKey: null,
  };

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyPress);
  }

  handleKeyPress = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    return (
      <div className="App">
        {this.state.pressedKey && (
          <h1>The last pressed key is: [{this.state.pressedKey}]</h1>
        )}
        {!this.state.pressedKey && <h1>Nothing was pressed yet</h1>}
      </div>
    );
  }
}
