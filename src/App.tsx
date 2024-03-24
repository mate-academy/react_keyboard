import React from 'react';

type State = {
  pressedKey: string | null,
};

const DEFAULT_MESSAGE = 'Nothing was pressed yet';

export class App extends React.Component {
  state: State = {
    pressedKey: null,
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handlePressedKey);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handlePressedKey);
  }

  handlePressedKey = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">{this.state.pressedKey ? `The last pressed key is [${this.state.pressedKey}]` : DEFAULT_MESSAGE }</p>
      </div>
    );
  }
}
