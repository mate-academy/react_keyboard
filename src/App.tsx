import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<State> {
  state: State = {
    pressedKey: ``,
  };

  componentDidMount(): void {
    this.setState({ pressedKey: 'Nothing was pressed yet' });
  }

  keyup = document.addEventListener('keyup', (event: KeyboardEvent) => {
    this.setState({ pressedKey: `The last pressed key is [${event.key}]` });
  });

  render() {
    return (
      <div className="App">
        <p className="App__message">{this.state.pressedKey}</p>
        <p className="App__message"></p>
      </div>
    );
  }
}
