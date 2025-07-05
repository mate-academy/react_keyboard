import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<State> {
  state: Readonly<State> = {
    pressedKey: '',
  };

  pressHandler = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.pressHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.pressHandler);
  }

  render() {
    const message = this.state.pressedKey
      ? `The last pressed key is [${this.state.pressedKey}]`
      : 'Nothing was pressed yet';

    return (
      <div className="App">
        <p className="App__message">{message}</p>
      </div>
    );
  }
}
