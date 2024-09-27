import { Component } from 'react';

type State = {
  messageChar: string;
};

export class App extends Component<{}, State> {
  state = {
    messageChar: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.messageHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.messageHandler);
  }

  messageHandler = (event: KeyboardEvent) => {
    this.setState({ messageChar: `The last pressed key is [${event.key}]` });
  };

  render() {
    const { messageChar } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {messageChar}
        </p>
      </div>
    );
  }
}
