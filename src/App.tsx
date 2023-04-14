import React from 'react';

interface State {
  pressedKey: string;
}

export class App extends React.Component<{}, State> {
  state = {
    pressedKey: '',
  };

  componentDidMount() {
    window.addEventListener('keyup', (e: KeyboardEvent) => {
      this.setState({ pressedKey: e.key });
    });
  }

  render() {
    const { pressedKey } = this.state;

    const infoMessage = pressedKey
      ? `The last pressed key is [${this.state.pressedKey}]`
      : 'Nothing was pressed yet';

    return (
      <div className="App">
        <p className="App__message">{infoMessage}</p>
      </div>
    );
  }
}
