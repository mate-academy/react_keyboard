import React from 'react';
interface AppState {
  pressedKey: string | null;
}

export class App extends React.Component<{}, AppState> {
  state: AppState = {
    pressedKey: null,
  };

  // add
  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  // delete
  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  // update
  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    return (
      <div className="App">
        <p className="App_message">
          {this.state.pressedKey
            ? `The last pressed key is [${this.state.pressedKey}]`
            : 'No key pressed yet'}
        </p>
      </div>
    );
  }
}
