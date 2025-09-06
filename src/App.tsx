import React from 'react';

type State = {
  pressedKey: string | null;
};

export class App extends React.Component<State> {
  state: State = {
    pressedKey: null,
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    return (
      <div className="App">
        {!this.state.pressedKey ? (
          <p>Nothing was pressed yet</p>
        ) : (
          <p>The last pressed key is [{this.state.pressedKey}]</p>
        )}
      </div>
    );
  }

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }
}
