import React from 'react';

interface State {
  pressedKey: string;
}

export class App extends React.Component<State> {
  state: State = {
    pressedKey: '',
  };

  keyupHandler = (e: KeyboardEvent) => {
    this.setState({ pressedKey: e.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyupHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyupHandler);
  }

  render() {
    const { pressedKey } = this.state;

    const message = pressedKey
      ? `The last pressed key is [${pressedKey}]`
      : 'Nothing was pressed yet';

    return (
      <div className="App">
        <p className="App__message">{message}</p>
      </div>
    );
  }
}
