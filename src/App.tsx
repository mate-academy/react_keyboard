import React from 'react';

type State = {
  pressedKey: string;
};
export class App extends React.Component<State> {
  state: State = {
    pressedKey: 'Nothing was pressed yet',
  };

  handlePressedKeyDown = (e: KeyboardEvent) => {
    this.setState({ pressedKey: `The last pressed key is [${e.key}]` });
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handlePressedKeyDown);
  }

  componentWillUnmount(): void {
    window.removeEventListener('keydown', this.handlePressedKeyDown);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">{`${pressedKey}`}</p>
      </div>
    );
  }
}
