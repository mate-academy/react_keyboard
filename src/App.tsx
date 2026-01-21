import React from 'react';

type State = {
  pressedKey: string | null;
};

export class App extends React.Component<{}, State> {
  state: State = {
    pressedKey: null,
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({
      pressedKey: event.key,
    });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    if (this.state.pressedKey === null) {
      return (
        <div className="App">
          <p className="App__message">Nothing was pressed yet</p>
        </div>
      );
    }

    return (
      <div className="App">
        <p className="App__message">
          The last pressed key is [{this.state.pressedKey}]
        </p>
      </div>
    );
  }
}
