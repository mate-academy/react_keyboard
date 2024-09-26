import React from 'react';

const emptyKey = '';
const keyUp = 'keyup';

export class App extends React.Component {
  state = {
    pressedKey: emptyKey,
  };

  componentDidMount() {
    document.addEventListener(keyUp, (event: KeyboardEvent) => {
      this.setState({ pressedKey: event.key });
    });
  }

  componentWillUnmount() {
    document.removeEventListener(keyUp, () => {
      this.setState({ pressedKey: emptyKey });
    });
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
