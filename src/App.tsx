import React from 'react';

type State = {
  pressedKey: string,
};

const DEFAULT_MESSAGE = 'Nothing was pressed yet';

export class App extends React.Component {
  state: State = {
    pressedKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.changePressedKey(event.key);
    });
  }

  changePressedKey = (key: string) => {
    this.setState({ pressedKey: key });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">{this.state.pressedKey ? `The last pressed key is [${this.state.pressedKey}]` : DEFAULT_MESSAGE }</p>
      </div>
    );
  }
}
