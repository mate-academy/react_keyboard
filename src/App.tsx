import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<State> {
  state: State = {
    pressedKey: '',
  };

  keyboardHendler = (event: KeyboardEvent) => {
    const changed = this.state.pressedKey !== event.key;

    if (changed) {
      this.setState({
        ...this.state,
        pressedKey: event.key,
      });
    }
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyboardHendler);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyboardHendler);
  }

  render() {
    return (
      <div className="App">
        {this.state.pressedKey ? (
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
