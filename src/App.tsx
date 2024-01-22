import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component {
  state: State = {
    pressedKey: '',
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
    return !this.state.pressedKey ? (
      <p className="App__message">Nothing was pressed yet </p>
    ) : (
      <p className="App__message">
        {`The last pressed key is [${this.state.pressedKey}]`}
      </p>
    );
  }
}
// () => (
//   <div className="App">
//   <p className="App__message">The last pressed key is [Enter]</p>
// </div>
// );
