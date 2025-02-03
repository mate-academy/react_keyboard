import { Component } from 'react';

type State = {
  key: string;
  message: string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    key: '',
    message: '',
  };

  handleKeyUp = (e: KeyboardEvent) => {
    this.setState({
      key: e.key,
      message: `The last pressed key is [${e.key}]`,
    });
  };

  componentDidMount(): void {
    this.setState({ message: 'Nothing was pressed yet' });
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">{this.state.message}</p>
      </div>
    );
  }
}
