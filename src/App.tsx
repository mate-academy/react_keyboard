import React from 'react';

type State = {
  pressedKey: string;
};
export class App extends React.Component<State> {
  state: Readonly<State> = {
    pressedKey: '',
  };

  handleEventListener = (event: KeyboardEvent) => {
    this.setState({
      pressedKey: event.key,
    });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleEventListener);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleEventListener);
  }

  render() {
    const { pressedKey } = this.state;
    const message = pressedKey
      ? `The last pressed key is ${`[${pressedKey}]`}`
      : 'Nothing was pressed yet';

    return (
      <div className="App">
        <p className="App__message">{message}</p>
      </div>
    );
  }
}
