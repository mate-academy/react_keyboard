import React from 'react';

type State = {
  pressedKey: string | null,
};

export class App extends React.PureComponent<{}, State> {
  state: State = {
    pressedKey: null,
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        {pressedKey
          ? (
            <p className="App__message">
              {`The last pressed key is [${pressedKey}]`}
            </p>
          ) : (
            <p className="App__message">
              Nothing was pressed yet
            </p>
          )}
      </div>
    );
  }
}
