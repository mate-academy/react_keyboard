import React from 'react';

type State = {
  pressedKey: string | null;
};

export class App extends React.Component {
  state: Readonly<State> = {
    pressedKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ pressedKey: event.key });
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ pressedKey: event.key });
    });
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {
            this.state.pressedKey
              ? `The last pressed key is [${this.state.pressedKey}]`
              : 'Nothing was pressed yet'
          }
        </p>
      </div>
    );
  }
}
