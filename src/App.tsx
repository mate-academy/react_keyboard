import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component {
  state: Readonly<State> = {
    pressedKey: '',
  };

  componentDidMount(): void {
    window.addEventListener('keyup', this.keyUpHandler);
  }

  componentWillUnmount(): void {
    window.removeEventListener('keyup', this.keyUpHandler);
  }

  keyUpHandler = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          The last pressed key is
          {' '}
          {this.state.pressedKey || ' [Nothing was pressed yet]'}
        </p>
      </div>
    );
  }
}
