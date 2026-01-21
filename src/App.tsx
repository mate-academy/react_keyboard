import React from 'react';

type State = {
  pressedKey: string | null;
};
export class App extends React.Component<{}, State> {
  state = {
    pressedKey: null,
  };

  keyupHandler = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    window.addEventListener('keyup', this.keyupHandler);
  }

  componentWillUnmount(): void {
    window.removeEventListener('keyup', this.keyupHandler);
  }

  render() {
    return (
      <div className="App">
        {this.state.pressedKey === null ? (
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
