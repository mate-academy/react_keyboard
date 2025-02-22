import React from 'react';

interface AppState {
  pressedKey: string;
}

export class App extends React.Component<{}, AppState> {
  state: AppState = {
    pressedKey: 'Nothing was pressed yet', // Initial state
  };

  componentDidMount() {
    // Adding the keyup event listener
    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount() {
    // Removing the keyup event listener when the component unmounts
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  handleKeyPress = (event: KeyboardEvent) => {
    this.setState({ pressedKey: `The last pressed key is [${event.key}]` });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">{this.state.pressedKey}</p>
      </div>
    );
  }
}
