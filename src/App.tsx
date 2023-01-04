import React from 'react';

type AppState = {
  pressedKey: string;
};

export class App extends React.Component<{}, AppState> {
  state = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyUpHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyUpHandler);
  }

  keyUpHandler(event: KeyboardEvent) {
    this.setState({ pressedKey: event.key });
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {
            this.state.pressedKey
              ? `The last pressed key is [${this.state.pressedKey}]`
              : 'Nothing was pressed yet'
          }
        </p>
      </div>
    );
  }
}
