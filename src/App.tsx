import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.PureComponent<{}, State> {
  state: State = {
    pressedKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeySet);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeySet);
  }

  handleKeySet = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  handleKeyUnset = () => {
    this.setState({ pressedKey: '' });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        {this.state.pressedKey ? (
          <p
            className="App__message"
          >
            {`The last pressed key is [${pressedKey}]`}
            <button
              type="button"
              className="delete"
              aria-label="close"
              onClick={() => this.handleKeyUnset()}
            >
              -
            </button>
          </p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
