import React from 'react';
type State = {
  pressedKey: string | null;
};

export class App extends React.Component {
  state: Readonly<State> = {
    pressedKey: null,
  };

  handleKeypress = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeypress);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeypress);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        {pressedKey ? (
          <p className="App__message">The last pressed key is [{pressedKey}]</p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
