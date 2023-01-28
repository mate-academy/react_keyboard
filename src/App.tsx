import React from 'react';

interface AppState {
  pressedKey: string | null;
}

export class App extends React.Component<{}, AppState> {
  state: AppState = {
    pressedKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyupHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyupHandler);
  }

  keyupHandler = (event: KeyboardEvent) => {
    this.setState({
      pressedKey: event.key,
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.pressedKey
          ? (
            <p className="App__message">
              The last pressed key is [
              {this.state.pressedKey}
              ]
            </p>
          )
          : (
            <p className="App__message">Nothing was pressed yet</p>
          )}
      </div>
    );
  }
}
