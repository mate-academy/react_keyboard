import React from 'react';

type State = {
  pressedKey: string | null
};

export class App extends React.Component<State> {
  state: State = {
    pressedKey: null,
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyup);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyup);
  }

  handleKeyup = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        {!pressedKey ? (
          <p className="App__message">Nothing was pressed yet</p>
        ) : (
          <p className="App__message">{`The last pressed key is [${pressedKey}]`}</p>
        )}
      </div>
    );
  }
}
