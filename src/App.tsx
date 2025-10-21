import React from 'react';

type State = {
  lastPressedKey: string | null;
};

export class App extends React.Component<{}, State> {
  state: State = {
    lastPressedKey: null,
  };

  handleKeyboardButtonClick = (event: KeyboardEvent) => {
    this.setState({ lastPressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyboardButtonClick);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyboardButtonClick);
  }

  render() {
    const { lastPressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {lastPressedKey
            ? `The last pressed key is [${lastPressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
