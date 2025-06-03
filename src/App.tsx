import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    pressedKey: '',
  };

  handleDocumentPress = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleDocumentPress);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleDocumentPress);
  }

  render() {
    const { pressedKey } = this.state;
    const hasKeyBeenPressed = pressedKey !== '';

    return (
      <div className="App">
        {hasKeyBeenPressed ? (
          <p className="App__message">The last pressed key is [{pressedKey}]</p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
