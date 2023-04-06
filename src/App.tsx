import React from 'react';

interface State {
  pressedKey: string | null;
}

export class App extends React.Component {
  state: Readonly<State> = {
    pressedKey: null,
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handlePressKeyboard);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handlePressKeyboard);
  }

  handlePressKeyboard = (event: KeyboardEvent) => {
    this.setState({
      pressedKey: event.key,
    });
  };

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
