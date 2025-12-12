import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<State> {
  state: State = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.keyupHandler(event);
    });
  }

  keyupHandler = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentWillUnmount() {
    window.removeEventListener('keyup', this.keyupHandler);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKey
            ? `The last pressed key is [${this.state.pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
