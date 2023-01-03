import React from 'react';

type AppProps = {};

type AppState = {
  pressedKey: string;
};

export class App extends React.Component<AppProps, AppState> {
  state = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', (e) => this.keyUpHandler(e));
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyUpHandler);
  }

  keyUpHandler(event: KeyboardEvent) {
    this.setState({ pressedKey: event.key });
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
