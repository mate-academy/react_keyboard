import React from 'react';

interface StateType {
  pressedKey: string | null;
}

export class App extends React.Component {
  state: StateType = {
    pressedKey: null,
  };

  handleKeyDown = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyDown);
  }

  componentDidUpdate(
    prevProps: Readonly<StateType>,
    prevState: Readonly<StateType>,
  ): void {
    if (
      this.state.pressedKey !== prevState.pressedKey &&
      this.state.pressedKey !== null
    ) {
      this.setState({
        pressedKey: this.state.pressedKey,
      });
    }
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyDown);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey
            ? `The last pressed key is [${pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
