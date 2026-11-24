import React from 'react';

type State = {
  lastPressedKey: string;
  message: string;
};
export class App extends React.Component<State> {
  state: State = {
    lastPressedKey: '',
    message: 'Nothing was pressed yet',
  };

  handleKeyPress = (event: KeyboardEvent) => {
    this.setState({ lastPressedKey: event.key });
    this.setState({ message: `The last pressed key is [${event.key}]` });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">{this.state.message}</p>
      </div>
    );
  }
}
