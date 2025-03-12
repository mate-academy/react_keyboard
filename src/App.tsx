import React from 'react';

type State = {
  pressedKey: null | string;
};

export class App extends React.Component {
  state: State = {
    pressedKey: null,
  };

  componentDidMount(): void {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ pressedKey: event.key });
    });
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ pressedKey: event.key });
    });
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKey === null && 'Nothing was pressed yet'}
          {this.state.pressedKey !== null &&
            `The last pressed key is [${this.state.pressedKey}]`}
        </p>
      </div>
    );
  }
}
