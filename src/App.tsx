import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<State> {
  state = {
    messageWithKey: 'Nothing was pressed yet',
  };

  handleKeypress = (event: KeyboardEvent) => {
    this.setState({ messageWithKey: `The last pressed key is [${event.key}]` });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeypress);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeypress);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">{this.state.messageWithKey}</p>
      </div>
    );
  }
}
