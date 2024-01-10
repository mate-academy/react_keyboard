import React from 'react';

interface State {
  char: string;
}

export class App extends React.Component<{}, State> {
  state:Readonly<State> = {
    char: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.onKeyboardEvent);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.onKeyboardEvent);
  }

  onKeyboardEvent = (event: KeyboardEvent) => {
    this.setState({ char: event.key });
  };

  render() {
    return (
      <div className="App">
        {this.state.char ? (
          <p className="App__message">{`The last pressed key is [${this.state.char}]`}</p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
