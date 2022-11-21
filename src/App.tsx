import React from 'react';

type State = {
  pressedKey: string,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: 'Nothing was pressed yet',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyPressed);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyPressed);
  }

  handleKeyPressed = (event: KeyboardEvent) => {
    this.setState({ pressedKey: `The last pressed key is [${event.key}]` });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">{pressedKey}</p>
      </div>
    );
  }
}
