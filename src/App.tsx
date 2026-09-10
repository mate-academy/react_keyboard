import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<State> {
  state: State = {
    pressedKey: '',
  };

  message = 'Nothing was pressed yet';

  handleKeyPress = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });

    this.message = `The last pressed key is [${event.key}]`;
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">{this.message}</p>
      </div>
    );
  }
}
