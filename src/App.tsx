import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<State, {}> {
  state: State = {
    pressedKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    const message = pressedKey
      ? `The last pressed key is [${pressedKey}]`
      : 'Nothing was pressed yet';

    return (
      <div className="App">
        <p className="App__message">{message}</p>
      </div>
    );
  }
}
