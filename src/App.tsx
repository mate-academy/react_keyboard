import React from 'react';

type State = {
  pressedKey: string
};

export class App extends React.Component< {}, State > {
  state = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.key);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.key);
  }

  key = (event: KeyboardEvent) => (
    this.setState({ pressedKey: event.key })
  );

  render() {
    if (this.state.pressedKey === ' ') {
      this.setState({ pressedKey: 'Space' });
    }

    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKey !== ''
            ? `The last pressed key is [${this.state.pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
