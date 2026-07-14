import React from 'react';

type State = {
  pressedKey: string;
  message: string;
};

export class App extends React.Component<State> {
  state: Readonly<State> = {
    pressedKey: '',
    message: 'Nothing was pressed yet',
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  handleChange = () => {
    this.setState({
      message: `The last pressed key is [${this.state.pressedKey}]`,
    });
  };

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    window.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    const { pressedKey } = this.state;
    const message =
      pressedKey !== ''
        ? `The last pressed key is [${pressedKey}]`
        : 'Nothing was pressed yet';

    return (
      <div className="App">
        <p className="App__message">{message}</p>
      </div>
    );
  }
}
