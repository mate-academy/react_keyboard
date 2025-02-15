import React from 'react';
type State = {
  pressedKey: string;
};

export class App extends React.Component<State> {
  state: Readonly<State> = {
    pressedKey: '',
  };

  keyHandle = event => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyHandle);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.keyHandle);
  }

  render() {
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
