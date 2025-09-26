import React from 'react';

type State = {
  pressedKey: string | null;
  isFirstPressed: boolean;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: null,
    isFirstPressed: false,
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({
      pressedKey: event.key,
      isFirstPressed: true,
    });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    const { pressedKey, isFirstPressed } = this.state;

    return isFirstPressed && pressedKey ? (
      <div className="App">
        <p className="App__message">
          The last pressed key is {`[${pressedKey}]`}
        </p>
      </div>
    ) : (
      <div className="App">
        <p className="App__message">Nothing was pressed yet</p>
      </div>
    );
  }
}
