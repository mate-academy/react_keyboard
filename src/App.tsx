import React from 'react';

type State = {
  pressedKey: string | null;
};

export class App extends React.Component {
  state: Readonly<State> = {
    pressedKey: null,
  };

  componentDidMount(): void {
    window.addEventListener('keyup', this.keyUpHandler);
  }

  componentWillUnmount(): void {
    window.removeEventListener('keyup', this.keyUpHandler);
  }

  keyUpHandler = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {
            !this.state.pressedKey
              ? 'Nothing was pressed yet'
              : `The last pressed key is [${pressedKey}]`
          }
        </p>
      </div>
    );
  }
}
