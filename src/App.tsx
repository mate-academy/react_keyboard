import { Component } from 'react';

type State = {
  messageNothing: string;
};

export class App extends Component<{}, State> {
  state = {
    messageNothing: 'Nothing was pressed yet',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handler);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handler);
  }

  handler = (event: KeyboardEvent) => {
    this.setState({
      messageNothing: `The last pressed key is [${event.key}]`,
    });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">{this.state.messageNothing}</p>
      </div>
    );
  }
}
