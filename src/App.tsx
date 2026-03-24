import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    pressedKey: '',
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    const { pressedKey } = this.state;
    const message = 'Nothing was pressed yet';
    const message2 = `The last pressed key is [${pressedKey}]`;

    const result = pressedKey ? message2 : message;

    return (
      <div className="App">
        <p className="App__message">{result}</p>
      </div>
    );
  }
}
