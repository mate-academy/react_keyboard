import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.PureComponent<State> {
  state: State = {
    pressedKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.keyListener);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.keyListener);
  }

  keyListener = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey
            ? `The last pressed key is [${this.state.pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
