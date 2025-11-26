import React from 'react';

type Props = {};

type State = {
  pressedKey: string | null;
};
export class App extends React.Component<Props, State> {
  state: State = {
    pressedKey: null,
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    const { pressedKey } = this.state;
    let message = 'Nothing was pressed yet';

    if (pressedKey !== null) {
      message = `The last pressed key is [${pressedKey}]`;
    }

    return (
      <div className="App">
        <p className="App__message">{message}</p>
      </div>
    );
  }
}
