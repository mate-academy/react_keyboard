import React from 'react';

type State = {
  pressedKey: boolean;
  key: string;
};

export class App extends React.Component {
  state: State = {
    pressedKey: false,
    key: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ pressedKey: true, key: event.key });
    });
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ key: event.key });
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.pressedKey ? (
          <p className="App__message">
            {`The last pressed key is [${this.state.key}]`}
          </p>
        ) : (
          <p className="App__message">
            Nothing was pressed yet
          </p>
        )}
      </div>
    );
  }
}
