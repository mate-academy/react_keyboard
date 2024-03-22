import React from 'react';

interface State {
  pressedKey: string;
}

export class App extends React.Component<State> {
  state: State = {
    pressedKey: '',
  };

  handleKeyBoard = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyBoard);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyBoard);
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
