
import React from 'react';

type State = {
  pressedKey: string;
  isFirstMessage: boolean;
};

export class App extends React.Component {
  state: Readonly<State> = {
    pressedKey: '',
    isFirstMessage: true,
  };

  keyBoardHandler = (event: KeyboardEvent) => {
    this.setState({
      pressedKey: event.key,
    });
  };

  componentDidMount(): void {
    addEventListener('keyup', this.keyBoardHandler);
  }

  componentDidUpdate(): void {
    if (this.state.isFirstMessage) {
      this.setState({
        isFirstMessage: false,
      });
    }
  }

  componentWillUnmount(): void {
    removeEventListener('keyup', this.keyBoardHandler);
  }

  render(): React.ReactNode {

    const { pressedKey, isFirstMessage } = this.state;

    return (
      <div className="App">
        {isFirstMessage ? (
          <p className="App__message">Nothing was pressed yet</p>
        ) : (
          <p className="App__message">The last pressed key is [{pressedKey}]</p>
        )}
      </div>
    );
  }
}
