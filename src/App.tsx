import React from 'react';

type State = {
  pressedKey: string | false;
};
export class App extends React.Component<{}, State> {
  state: State = {
    pressedKey: false,
  };

  handleKeyboardEvent = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyboardEvent);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyboardEvent);
  }

  render() {
    if (this.state.pressedKey === false) {
      return (
        <div className="App">
          <p className="App__message">Nothing was pressed yet</p>
        </div>
      );
    } else {
      return (
        <div className="App">
          <p className="App__message">
            The last pressed key is [{this.state.pressedKey}]
          </p>
        </div>
      );
    }
  }
}
