import React from 'react';

type State = {
  pressedKey: null | string;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyOnPress);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.keyOnPress);
  }

  keyOnPress = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;
    const mainText = pressedKey
      ? `The last pressed key is [${pressedKey}]`
      : 'Nothing was pressed yet';

    return (
      <div className="App">
        <p className="App__message">
          {mainText}
        </p>
      </div>
    );
  }
}
