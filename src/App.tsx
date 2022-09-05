import React from 'react';

type State = {
  pressedKey: string,
};

class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handler);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handler);
  }

  handler = (event: KeyboardEvent) => {
    this.setState({
      pressedKey: event.code === 'Space'
        ? 'Space'
        : event.key,
    });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey
            ? `The last pressed key is [${pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

export default App;
