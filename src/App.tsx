import React from 'react';

type State = {
  message: string;
};

export class App extends React.Component<State> {
  state: State = {
    message: 'Nothing was pressed yet',
  };

  handleKeyPress = (event: KeyboardEvent) => {
    this.setState({ message: `The last pressed key is [${event.key}]` });
  };

  componentDidMount(): void {
    window.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount(): void {
    window.removeEventListener('keyup', this.handleKeyPress);
  }

  render() {
    const { message } = this.state;

    return (
      <div className="App">
        <p className="App__message">{message}</p>
      </div>
    );
  }
}
