import React from 'react';

type State = {
  pressedKey: string;
  message: string;
};

export class App extends React.PureComponent<State> {
  state = {
    pressedKey: '',
    message: '',
  };

  handleEventListener = (e: KeyboardEvent) => {
    this.setState({ pressedKey: e.key });
  };

  componentDidMount(): void {
    if (this.state.pressedKey === '') {
      this.setState({ message: `Nothing was pressed yet` });
    }

    document.addEventListener('keyup', this.handleEventListener);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleEventListener);
  }

  componentDidUpdate(prevState: Readonly<State>): void {
    if (
      prevState.pressedKey != this.state.pressedKey &&
      this.state.pressedKey !== ''
    ) {
      this.setState({
        message: `The last pressed key is [${this.state.pressedKey}]`,
      });
    }
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">{this.state.message}</p>
      </div>
    );
  }
}
