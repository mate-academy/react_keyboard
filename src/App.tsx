import React from 'react';

interface Appstate {
  pressedKey: string;
}
export class App extends React.Component<{}, Appstate> {
  state: Appstate = {
    pressedKey: '',
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
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
          {this.state.pressedKey ? (
            <>The last pressed key is [{this.state.pressedKey}]</>
          ) : (
            <>Nothing was pressed yet</>
          )}
        </p>
      </div>
    );
  }
}
