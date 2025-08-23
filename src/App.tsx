import React from 'react';

interface StateType {
  pressedKey: string;
}

export class App extends React.Component {
  state: StateType = {
    pressedKey: 'Nothing was pressed yet',
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
      !this.state.pressedKey.startsWith('The last pressed key is')
    ) {
      this.setState({
        pressedKey: `The last pressed key is [${this.state.pressedKey}]`,
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
        <p className="App__message">{pressedKey}</p>
      </div>
    );
  }
}
