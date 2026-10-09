import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<State> {
  state: Readonly<State> = {
    pressedKey: '',
  }

  pressedKeyHandler = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key })
  }

  componentDidMount(): void {
    document.addEventListener('keyup', this.pressedKeyHandler)
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.pressedKeyHandler)
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKey
            ? `The last pressed key is [${this.state.pressedKey}]`
            : `Nothing was pressed yet`
          }
      </p>
      </div>
    );
  }
}
