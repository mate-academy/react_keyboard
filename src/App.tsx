import React from 'react';

interface State {
  pressedKey: string;
}

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: '',
  };

  keyUpHandler = (event: KeyboardEvent) => {
    this.setState({
      pressedKey: event.key,
    });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.keyUpHandler);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.keyUpHandler);
  }

  render() {
    return (
      <div className="App" data-theme="dark">
        <p className="App__message">
          {this.state.pressedKey
            ? `The last pressed key is [${this.state.pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
