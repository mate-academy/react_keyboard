import React from 'react';

type Props = {};

type State = {
  pressedKey?: string,
};

export class App extends React.Component<Props, State> {
  state: State = {
    pressedKey: undefined,
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent) => {
    const currKey = event.key;

    if (currKey !== this.state.pressedKey) {
      this.setState({
        pressedKey: currKey,
      });
    }
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
