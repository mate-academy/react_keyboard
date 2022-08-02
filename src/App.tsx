import React from 'react';

type State = {
  pressedKey: string | undefined,
};

export class App extends React.Component<{}, State> {
  state = {
    pressedKey: undefined,
  };

  componentDidMount() {
    window.addEventListener('keyup', this.keyListener);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.keyListener);
  }

  keyListener = (event: KeyboardEvent) => {
    this.setState({
      pressedKey: event.key,
    });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          { this.state.pressedKey
            ? `The last pressed key is [${this.state.pressedKey}]`
            : 'Nothing was pressed yet' }
        </p>
      </div>
    );
  }
}
