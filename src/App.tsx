import React from 'react';

export class App extends React.Component {
  state = {
    lastPressedKey: '',
  };

  handleKeyPress = (keyEvent: KeyboardEvent) => {
    this.setState({ lastPressedKey: keyEvent.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  render() {
    return (
      <div className="App">
        {this.state.lastPressedKey === '' ? (
          <p className="App__message">Nothing was pressed yet</p>
        ) : (
          <p className="App__message">
            The last pressed key is [{this.state.lastPressedKey}]
          </p>
        )}
      </div>
    );
  }
}
