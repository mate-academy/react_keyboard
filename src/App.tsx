import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<State> {
  state: Readonly<State> = {
    pressedKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', event => {
      this.setState({ pressedKey: event.key });
    });
  }

  componentWillUnmount(): void {
    document.addEventListener('keyup', event => {
      this.setState({ pressedKey: event.key });
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.pressedKey !== '' ? (
          <p className="App__message">
            The last pressed key is [{this.state.pressedKey}]
          </p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
