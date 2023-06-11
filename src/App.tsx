import React from 'react';

type State = {
  pressedKey: KeyboardEvent | undefined;
};

export class App extends React.Component<{}, State> {
  state: State = {
    pressedKey: undefined,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleDocumentKey);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleDocumentKey);
  }

  handleDocumentKey = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey ? `The last pressed key is [${pressedKey.key}]` : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
