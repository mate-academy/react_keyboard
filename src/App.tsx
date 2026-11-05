import React from 'react';

export class App extends React.Component {
  state = {
    pressedKey: '',
  };

  handleKeyPress = (keyEvent: KeyboardEvent) => {
    this.setState({ pressedKey: keyEvent.key });
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
        {this.state.pressedKey === '' ? (
          <p className="App__message">Nothing was pressed yet</p>
        ) : (
          <p className="App__message">
            The last pressed key is [{this.state.pressedKey}]
          </p>
        )}
      </div>
    );
  }
}
