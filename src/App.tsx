import React from 'react';

type State = {
  pressedKey: string | null;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: null,
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.changePressedKey);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.changePressedKey);
  }

  changePressedKey = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return pressedKey
      ? (
        <div className="App">
          <p className="App__message">
            {`The last pressed key is [${pressedKey}]`}
          </p>
        </div>
      )
      : (
        <div className="App">
          <p className="App__message">Nothing was pressed yet</p>
        </div>
      );
  }
}
