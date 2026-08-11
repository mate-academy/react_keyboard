import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component {
  state: State = {
    pressedKey: '',
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({
      pressedKey: event.key,
    });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.keyboardHandler);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.keyboardHandler);
  }

  render() {
    return (
      <div className="App">
        {this.state.pressedKey ? (
          <p className="App__message">{`The last pressed key is [${this.state.pressedKey}]`}</p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
