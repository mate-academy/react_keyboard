import React from 'react';

interface Clock {
  pressedKey: string | null;
}

export class App extends React.Component<{}, Clock> {
  state = {
    pressedKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.findKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.findKey);
  }

  findKey = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

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
