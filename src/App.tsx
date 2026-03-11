import React from 'react';

interface State {
  pressedKey: string | null;
}

export class App extends React.Component<{}, State> {
  state: State = { pressedKey: null };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  getDisplayMessage() {
    if (this.state.pressedKey === null) {
      return 'Nothing was pressed yet';
    }

    return `The last pressed key is [${this.state.pressedKey}]`;
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">{this.getDisplayMessage()}</p>
      </div>
    );
  }
}
