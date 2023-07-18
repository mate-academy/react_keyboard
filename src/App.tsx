import React from 'react';

type State = {
  message: string;
};

export class App extends React.PureComponent {
  state: State = {
    message: 'Nothing was pressed yet',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentDidUpdate(prevState: Readonly<State>): boolean {
    if (this.state.message !== prevState.message) {
      return true;
    }

    return false;
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  handleKeyPress = (event: KeyboardEvent) => {
    this.setState({ message: `The last pressed key is [${event.key}]` });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">{this.state.message}</p>
      </div>
    );
  }
}
