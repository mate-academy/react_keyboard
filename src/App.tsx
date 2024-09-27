import React from 'react';

type State = {
  pressedKey: boolean;
};

export class App extends React.Component<State> {
  state: State = {
    pressedKey: false,
  };

  handleKeyBoard = (event: KeyboardEvent) => {
    return this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyBoard);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyBoard);
  }

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
