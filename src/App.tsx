import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<State> {
  state: Readonly<State> = {
    pressedKey: '',
  };

  handlePressedKey = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handlePressedKey);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handlePressedKey);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        {!pressedKey ? (
          <p className="App__message">Nothing was pressed yet</p>
        ) : (
          <p className="App__message">The last pressed key is [{pressedKey}]</p>
        )}
      </div>
    );
  }
}
