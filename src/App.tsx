import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.PureComponent<{}, State> {
  state = {
    pressedKey: '',
  };

  componentDidMount(): void {
    document.addEventListener(
      'keyup', (event) => {
        if (event instanceof KeyboardEvent) {
          this.setState({ pressedKey: event.key });
        }
      },
    );
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        {pressedKey
          ? (
            <p className="App__message">{`The last pressed key is [${pressedKey}]`}</p>
          ) : (
            <p className="App__message">Nothing was pressed yet</p>
          )}
      </div>
    );
  }
}
