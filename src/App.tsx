import React from 'react';

type State = {
  pressedKey: string;
  keyStatus: boolean;
};

export class App extends React.Component<State> {
  state: Readonly<State> = {
    pressedKey: '',
    keyStatus: false,
  };

  handleKeyDown = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key, keyStatus: true });
  };

  componentDidMount(): void {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return (
      <div className="App">
        {this.state.keyStatus ? (
          <p className="App__message">
            The last pressed key is [{this.state.pressedKey}]
          </p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
