import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyListenerCallback);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyListenerCallback);
  }

  keyListenerCallback = (event: KeyboardEvent) => {
    if (event.code === 'Space') {
      this.setState({ pressedKey: event.code });
    } else {
      this.setState({ pressedKey: event.key });
    }
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKey
            ? `The las pressed key is [${this.state.pressedKey}]`
            : 'Nothing was pressed yet' }
        </p>
      </div>
    );
  }
}
